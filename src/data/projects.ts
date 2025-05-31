export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  aiHint: string;
}

export const projects: Project[] = [
  {
    id: "legal-prediction-model",
    title: "Prediction Model For Legal Judgments",
    description: "Built an AI model using Transformer-based NLP models (BART, T5 Base, Distil GPT-2, Facebook-opt-125m) to predict criminal case judgments under Pakistani law. Processed data using Python, BeautifulSoup, Tesseract, and Pandas. Tracked performance with Weights & Biases.",
    technologies: ["Python", "NLP", "BART", "T5", "GPT-2", "BeautifulSoup", "Tesseract", "Pandas", "W&B"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/hussainronaque", // Main GitHub, specific repo not in resume
    aiHint: "legal tech ai",
  },
  {
    id: "merkle-tree-signature",
    title: "Merkle Tree Digital Signature",
    description: "Implemented a Merkle Tree in C++ using Object-Oriented Programming for data integrity and tamper detection. Utilized SHA-256 hashing for Merkle root generation and digital signature verification of file authenticity.",
    technologies: ["C++", "OOP", "SHA-256", "Cryptography"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/hussainronaque",
    aiHint: "cryptography security",
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description: "Developed a Python-based inventory system with PyQt6 for UI and PyODBC for SQL database connectivity. Features include CRUD operations for customers, vendors, sales, materials, products, report generation, and user authentication.",
    technologies: ["Python", "PyQt6", "PyODBC", "SQL", "GUI"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/hussainronaque",
    aiHint: "inventory system",
  },
  {
    id: "maze-warriors-game",
    title: "Maze Warriors - 2D RPG Game",
    description: "Developed a 2D RPG adventure game in C++ using SDL2, featuring mazes, combat, and gameplay. Implemented core game mechanics like maze exploration, enemy encounters, health management, and timed objectives with an OOP architecture.",
    technologies: ["C++", "SDL2", "OOP", "Game Development"],
    imageUrl: "https://placehold.co/600x400.png",
    githubUrl: "https://github.com/hussainronaque",
    aiHint: "2d game rpg",
  },
];
