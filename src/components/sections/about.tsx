import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { skillCategories, type SkillCategory } from '@/data/skills';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-headline font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://placehold.co/400x400.png"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary object-cover"
              data-ai-hint="profile picture"
            />
          </div>
          <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I&apos;m Your Name, a passionate and driven final year Computer Science student with a strong foundation in software development, web technologies, and problem-solving. I thrive on creating elegant and efficient solutions to complex challenges.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech has equipped me with a diverse skillset, and I&apos;m always eager to learn new technologies and methodologies. I&apos;m particularly interested in full-stack development, cloud computing, and artificial intelligence.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I&apos;m not coding, I enjoy [Your Hobby 1], [Your Hobby 2], and exploring new tech trends. I&apos;m currently seeking opportunities where I can contribute my skills and grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:youremail@example.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-headline font-bold text-center mb-10">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category: SkillCategory) => (
              <Card key={category.title} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center text-foreground/90">
                        <skill.icon className="h-5 w-5 mr-3 text-primary" />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
