export interface Education {
  title: string;
  institution: string;
  logo: string;
  period: string;
}

export const education: Education[] = [
  {
    title: "Degree in computer engineering",
    institution: "Universitat de Barcelona (2011 - 2015)",
    logo: "/images/logos/ub.jpeg",
    period: "2011 - 2015",
  },
  {
    title: "Desarrollo de juegos con Unreal Engine de 0 a profesional",
    institution: "Udemy, Carlos Coronado (2024)",
    logo: "/images/logos/udemy.png",
    period: "2024",
  },
  {
    title: "Java Introductory course",
    institution: "Luz TI (2015)",
    logo: "/images/logos/luzti.jpeg",
    period: "2015",
  },
  {
    title: "Google Cloud: Associate Cloud Engineer",
    institution: "Online, Google Platform (2023)",
    logo: "/images/logos/gcp.png",
    period: "2023",
  },
  {
    title: "Unity Junior Programmer",
    institution: "Online, Unity Technologies (2025)",
    logo: "/images/logos/unity-junior-programmer.png",
    period: "2025",
  },
];
