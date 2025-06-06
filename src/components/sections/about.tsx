import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
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
              alt="Hussain Mustansir"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary object-cover"
              data-ai-hint="profile picture"
            />
          </div>
          <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I&apos;m Hussain Mustansir, a dedicated and driven Computer Science student at Habib University (2022-Present). With a strong foundation in programming languages like Python, C++, and C#, and experience developing diverse academic projects ranging from AI models for legal tech to 2D RPG games, I am passionate about leveraging technology to create innovative and impactful solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My technical journey includes proficiency in database management (MS SQL, MySQL), GUI development (PyQt6, Tkinter), data science libraries (Pandas, NumPy, Matplotlib), and web technologies. My recent internship at Habib Bank Limited further honed my analytical and strategic thinking skills.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am always eager to learn and apply new technologies, with a keen interest in AI, software development, and system design. I am currently seeking opportunities where I can contribute my skills and continue to grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/hussainronaque" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/hussainronaque" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:hmustanasir24@gmail.com">
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
