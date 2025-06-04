"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { enhanceProjectDescription, type EnhanceProjectDescriptionInput } from '@/ai/flows/enhance-project-description';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  projectDescription: z.string().min(20, { message: "Description must be at least 20 characters." }).max(1000),
  projectKeywords: z.string().min(3, { message: "Keywords must be at least 3 characters." }).max(200),
});

type FormData = z.infer<typeof formSchema>;

export function AiEnhancerSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [enhancedDescription, setEnhancedDescription] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
      projectKeywords: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setEnhancedDescription(null);
    try {
      const input: EnhanceProjectDescriptionInput = {
        projectDescription: data.projectDescription,
        projectKeywords: data.projectKeywords,
      };
      const result = await enhanceProjectDescription(input);
      setEnhancedDescription(result.enhancedDescription);
      toast({
        title: "Success!",
        description: "Project description enhanced successfully.",
      });
    } catch (error) {
      console.error("Error enhancing description:", error);
      toast({
        title: "Error",
        description: "Failed to enhance project description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-enhancer" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-headline font-bold text-center mb-12">AI Project Description Enhancer</h2>
        <Card className="max-w-2xl mx-auto shadow-lg animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wand2 className="mr-2 h-6 w-6 text-accent" />
              Enhance Your Project Pitch
            </CardTitle>
            <CardDescription>
              Provide your current project description and some keywords. Our AI will help you make it more compelling!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Project Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe your project..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectKeywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant Keywords (comma-separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., React, AI, Machine Learning, SaaS" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Enhancing..." : "Enhance Description"}
                </Button>
              </form>
            </Form>
            {enhancedDescription && (
              <div className="mt-8 p-6 border border-primary rounded-md bg-primary/10">
                <h4 className="text-lg font-semibold mb-2 text-primary-foreground">AI Suggested Enhancement:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{enhancedDescription}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
