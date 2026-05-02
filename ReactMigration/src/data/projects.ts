export interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Unity Junior Programming project",
    image: "/images/projects/ProgramminTheory.png",
    description: "A quick project to display the basic principles of programming theory: Abstraction, Encapsulation, Inheritance and Polymorphism.",
    link: "https://github.com/Ooin/Programming-Theory-in-Action",
  },
  {
    title: "React Refs and Portals",
    image: "/images/projects/reactRefsAndPortals.png",
    description: "In this learning project I delved in the waters of React and developed and simple game in the browser in order to explore Refs and Portals.",
    link: "https://github.com/Ooin/ReactRefsAndPortals",
  },
  {
    title: "Voxel Defense",
    image: "/images/projects/voxeldefense.png",
    description: "My current project. A light tower defense with our personal architecure, no artist input, no modelling, all but sounds made in the engine.",
  },
  {
    title: "Quarto UE4",
    image: "/images/projects/quarto.gif",
    description: "Personal project to give UE4 a refresh after a long while. A prototype of hte boardgame Quarto in UE4 Blueprints developed in a couple of weeks.",
    link: "https://dtritus.itch.io/quarto-in-ue",
  },
  {
    title: "Graduation Project",
    image: "/images/projects/TFG.png",
    description: "My first foray in Unity was my grade project for the University. I created a terrain generator with gaussian noise. Given a set of parameters like size and ammount of <i>blobs</i>, the random elements in the function, it generates a subset of islands randomly. This can be exported as a greyscale height map for future use.",
    link: "https://github.com/Ooin/TFG2015",
  },
  {
    title: "Lightless",
    image: "/images/projects/lightless.png",
    description: "The first and only time I've worked with Raylib was with this little game developed for the Global Game Jam 2014. There I teamed up with a group of people I had never met before and created this short sidescroll shoot'em up about nightmares.",
    link: "https://github.com/Ooin/GameJam2014",
  },
];
