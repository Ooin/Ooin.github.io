export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: "fa-gamepad",
    title: "9+ Years of Development",
    description: "From enterprise Java to Unity/Unreal games - adapted across multiple tech stacks",
  },
  {
    icon: "fa-museum",
    title: "Museum Exhibits Shipped",
    description: "Built interactive 3-screen systems for Qatar Museum of Natural History using Unity & Unreal",
  },
  {
    icon: "fa-code-branch",
    title: "50+ GitHub Repositories",
    description: "Active contributor with game prototypes, tools, and learning projects",
  },
  {
    icon: "fa-users",
    title: "Cross-Functional Teams",
    description: "Led technical initiatives at GFT (600+ employees) and Nakshisoft",
  },
];
