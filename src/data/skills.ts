import type { LucideIcon } from 'lucide-react';
import { Code, DatabaseZap, ServerCog, Palette, Cog, Smartphone, BrainCircuit } from 'lucide-react'; // Using BrainCircuit for AI/ML

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Python", icon: Code },
      { name: "Java", icon: Code },
      { name: "C++", icon: Code },
      { name: "SQL", icon: DatabaseZap },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Palette },
      { name: "React", icon: Code },
      { name: "Next.js", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: ServerCog },
      { name: "Express.js", icon: ServerCog },
      { name: "Firebase", icon: ServerCog }, // Using ServerCog as a general backend icon
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: DatabaseZap },
      { name: "PostgreSQL", icon: DatabaseZap },
      { name: "MySQL", icon: DatabaseZap },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: Cog },
      { name: "Docker", icon: Cog },
      { name: "REST APIs", icon: ServerCog },
      { name: "Jest", icon: Cog }, // Testing
      { name: "GenAI", icon: BrainCircuit}
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
    ]
  }
];
