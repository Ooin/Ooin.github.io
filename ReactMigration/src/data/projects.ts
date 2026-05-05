export interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
  status: "in-development" | "released" | "prototype" | "archived" | "early-work";
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Voxel Defense",
    image: "/images/projects/voxeldefense.png",
    description: "Light tower defense with custom architecture. No artist input - all models and effects created in-engine using Unity.",
    status: "in-development",
    tags: ["Unity", "Custom Architecture", "Voxel Art"],
  },
  {
    title: "Unity Junior Programming Project",
    image: "/images/projects/ProgramminTheory.png",
    description: "Educational project demonstrating OOP principles: Abstraction, Encapsulation, Inheritance and Polymorphism in Unity.",
    link: "https://github.com/Ooin/Programming-Theory-in-Action",
    status: "released",
    tags: ["Unity", "C#", "Education"],
  },
  {
    title: "React Refs and Portals",
    image: "/images/projects/reactRefsAndPortals.png",
    description: "Browser-based game exploring React Refs and Portals - a deep dive into React's advanced features.",
    link: "https://github.com/Ooin/ReactRefsAndPortals",
    status: "released",
    tags: ["React", "TypeScript", "Game Mechanics"],
  },
  {
    title: "Quarto UE4",
    image: "/images/projects/quarto.gif",
    description: "Board game prototype in UE4 Blueprints, developed in a couple of weeks as a refresh project.",
    link: "https://dtritus.itch.io/quarto-in-ue",
    status: "released",
    tags: ["Unreal Engine 4", "Blueprints", "Board Game"],
  },
  {
    title: "Graduation Project - Terrain Generator",
    image: "/images/projects/TFG.png",
    description: "Unity terrain generator using gaussian noise. Generates random island subsets exportable as greyscale height maps.",
    link: "https://github.com/Ooin/TFG2015",
    status: "early-work",
    tags: ["Unity", "C#", "Procedural Generation"],
  },
  {
    title: "Lightless - Global Game Jam 2014",
    image: "/images/projects/lightless.png",
    description: "Side-scrolling shooter about nightmares. Collaborated with strangers at GGJ2014 using Raylib.",
    link: "https://github.com/Ooin/GameJam2014",
    status: "early-work",
    tags: ["Raylib", "C++", "Game Jam"],
  },
];
