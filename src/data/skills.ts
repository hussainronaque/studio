import type { LucideIcon } from 'lucide-react';
import { Code, DatabaseZap, Palette, Cog, BrainCircuit, ShieldCheck, Microscope, BarChart3, Settings2, Github, Wind, LayoutPanelLeft, FileText, GitMerge, Shapes, Cpu } from 'lucide-react';

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
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: Code },
      { name: "C++", icon: Code },
      { name: "C", icon: Code },
      { name: "C#", icon: Code },
      { name: "HTML/CSS", icon: Palette },
      { name: "SQL", icon: DatabaseZap },
    ],
  },
  {
    title: "Web Development & Platforms",
    skills: [
      { name: "Shopify", icon: LayoutPanelLeft },
      { name: "Wordpress", icon: LayoutPanelLeft },
      { name: "Woocommerce", icon: LayoutPanelLeft },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MS SQL", icon: DatabaseZap },
      { name: "MySQL", icon: DatabaseZap },
      { name: "PyODBC", icon: GitMerge },
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Transformer NLP Models (BART, T5)", icon: BrainCircuit },
      { name: "Pandas", icon: BarChart3 },
      { name: "NumPy", icon: BarChart3 },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "BeautifulSoup", icon: FileText },
      { name: "Tesseract OCR", icon: Microscope },
      { name: "Weights & Biases (W&B)", icon: Settings2 },
    ],
  },
  {
    title: "GUI & Multimedia",
    skills: [
      { name: "Tkinter", icon: Cpu },
      { name: "PyQt6", icon: Cpu },
      { name: "SDL Library", icon: Wind },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", icon: Github },
      { name: "Object-Oriented Programming", icon: Shapes },
      { name: "SHA-256 Hashing", icon: ShieldCheck },
    ],
  },
];
