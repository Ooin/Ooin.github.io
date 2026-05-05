export interface GameJam {
  title: string;
  year: string;
  description: string;
  link?: string;
  theme?: string;
}

export const gameJams: GameJam[] = [
  {
    title: "Global Game Jam 2014",
    year: "2014",
    description: "Built 'Lightless' - a side-scrolling shooter about nightmares using Raylib. First game jam experience.",
    link: "https://github.com/Ooin/GameJam2014",
    theme: "We don't see things as they are, we see them as we are",
  },
];
