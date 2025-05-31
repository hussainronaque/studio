export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  aiHint: string; // For placeholder image generation
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform 'ShopSphere'",
    description: "A full-featured e-commerce website built with the MERN stack, allowing users to browse products, add to cart, and complete purchases securely. Includes admin panel for product and order management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/yourusername/shopsphere",
    liveDemoUrl: "#", // Replace with actual demo link if available
    aiHint: "online shopping",
  },
  {
    id: "project2",
    title: "Task Management App 'TaskMaster'",
    description: "A collaborative task management application enabling users to create projects, assign tasks, track progress, and communicate with team members. Real-time updates with WebSockets.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", " Zustand"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/yourusername/taskmaster",
    liveDemoUrl: "#",
    aiHint: "task manager",
  },
  {
    id: "project3",
    title: "Personal Portfolio Website (This one!)",
    description: "My personal portfolio website to showcase my projects, skills, and experience. Built with Next.js, Tailwind CSS, and Shadcn UI, featuring an AI-powered description enhancer.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Genkit AI"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/yourusername/portfolio-nextjs",
    aiHint: "portfolio website",
  },
  {
    id: "project4",
    title: "Weather Forecast App 'AtmoCheck'",
    description: "A sleek weather application that provides current weather conditions and forecasts for multiple locations using a third-party weather API. Features include geolocation and unit conversion.",
    technologies: ["React Native", "Expo", "OpenWeatherMap API"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/yourusername/atmocheck",
    aiHint: "weather app",
  },
];
