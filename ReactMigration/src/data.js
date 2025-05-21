import GFT_LOGO from "./assets/images/logos/GFT_logo.jpeg";
import OMEGAZETA_LOGO from "./assets/images/logos/3DTechOmegaZeta_logo.png";
import NAKSHI_LOGO from "./assets/images/logos/nakshi.png";
import GCP_LOGO from "./assets/images/logos/gcp.png"
import LUZTI_LOGO from "./assets/images/logos/luzti.jpeg"
import UB_LOGO from "./assets/images/logos/ub.jpeg"
import UDEMY_LOGO from "./assets/images/logos/udemy.png"
import UNITY_LOGO from "./assets/images/logos/unity-junior-programmer.png"
import LIGHTLESS_PIC from "./assets/images/projects/lightless.png";
import PROGTHEORY_PIC from "./assets/images/projects/ProgramminTheory.png";
import QUARTO_PIC from "./assets/images/projects/quarto.gif";
import REFPORTALS_PIC from "./assets/images/projects/reactRefsAndPortals.png";
import TFG_PIC from "./assets/images/projects/TFG.png";
import VOXDEF_PIC from "./assets/images/projects/voxeldefense.png"

export const ABOUT = {
    aboutDesc:
        "Developer with a strong passion for coding. Colaborating at Nakshisoft as Game Developer creating an exciting tower defense for Windows in Unity. Studied a Computer Engineering Degree at UB - Universitat de Barcelona. Multifaceted programmer with experience in multiple programming languages and technologies such as Salesforce, Unity, RESTful APIs with SpringBoot, Unreal Engine 4, C# Mono, Java JSP, Google Cloud, JS Bootstrap or PL/SQL. I'm also well versed in the Agile Methodology and used it, although sometimes with a flexible perspective on what Agile means, in most of the projects I've been assigned to as developer. In a more personal field I enjoy my free time with a wide variety of hobbies like videogames, boardgames, woodworking or inline skating. I also help, with my partner, in local animal shelters by fostering orphaned kittens during the first stages of their lifes until they are ready for adoption.",
};

export const TRAITS = {
    title: "Personal Traits",
    traitList: [
        "Backend Programmer",
        "Game Programmer",
        "Serious Games",
        "Quick Learner",
        "Engineering mindset",
        "Polyglot",
        "Animal Friend",
        "Fantasy Books Devourer",
        "Great Cook",
        "3D Printing Enthusiast",
        "Tinkerer",
        "Weeb",
    ],
};

export const SKILLS = [
    {
        title: "Technical Skills",
        skillList: [
            "Agile",
            "Design Patterns",
            "Clean Code",
            "KISS",
            "Git",
            "Jira",
            "Spring Boot",
            "REACT.js",
            "Styled CSS Components",
            "Tailwind CSS",
        ],
    },
    {
        title: "Soft Skills",
        skillList: [
            "Fast Learner",
            "Creative",
            "Problem Solver",
            "Team Player",
        ],
    },
    {
        title: "Programming Languages",
        skillList: [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "Java",
            "HTML",
            "Python",
            "SQL",
            "Matlab",
        ],
    },
    {
        title: "IDEs & Game Engines",
        skillList: [
            "IntelliJ IDEA",
            "Netbeans",
            "Eclipse",
            "Visual Studio",
            "Unity",
            "Unreal Engine",
        ],
    },
    {
        title: "Spoken Languages",
        skillList: ["Spanish native", "Catalan native", "English fluent"],
    },
];

export const EXPERIENCE = [
    {
        key: 1,
        logo: NAKSHI_LOGO,
        title: "Unity Developer",
        company: "Nakshisoft",
        date: "October 2024 - ongoing)",
        description:
            "I'm colaborating in the development of a Unity passion project, a voxel style tower defense. The project focus strongly in its architecture using an inhouse design.",
    },

    {
        key: 2,
        logo: GFT_LOGO,
        title: "Junior Cloud Developer",
        company: "GFT Iberia",
        date: "October 2023 - February 2024",
        description:
            'This team was developing a custom and native version of <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Openshift</a> for Google Cloud. We worked with github actions and <a href="https://www.terraform.io">Terraform</a> to deploy solutions when merging changes to the main branch.',
    },

    {
        key: 3,
        logo: GFT_LOGO,
        title: "Salesforce and Kimble administrator",
        company: "GFT Iberia",
        date: "April 2019 - February 2023",
        description:
            "Implementation of new functionalities on the company's Salesforce organization. I also helped managing the deployment of upgrades by the solution providers.</p> <p>Helpdesk action to the whole company fo cusing on technical issues more than functional ones. I was the main responsible of this tasks in the team.",
    },

    {
        key: 4,
        logo: GFT_LOGO,
        title: "Junior Java Developer",
        company: "GFT Iberia",
        date: "October 2017 - April 2019",
        description:
            "A legacy project for Deutsche Bank Spain and Portugal. We developed new functionalities with JSP and Spring to the Mortgage and Loans calculator internat to DB. The team tasks were managed with Agile and logged with a Jira board linked to the git commits. We also used Spring Boot to implement RESTful APIs as part of the modernization of the project.",
    },

    {
        key: 5,
        logo: OMEGAZETA_LOGO,
        title: "Junior Unity and Unreal Engine 4 Developer",
        company: "3DTechOmegaZeta",
        date: "July 2016 - June 2017",
        description:
            "Developing a 3D model of proteins and other biology systems interative with Unity and Unreal Engine. I also colaborated in a mock for an Android VR demo of the system in Unity.</p> <p>I developed two interactive screen systems for the Museum of Natural History of Doha, Qatar, in Mono and Unreal. The system developed in Mono was a 3 screen system bespoke system in which one was a touchscreen and the other 2 worked as satellites displaying information related to the selection. The second system was developed in unreal engine with a series of widgets to display information.",
    },

    {
        key: 6,
        logo: GFT_LOGO,
        title: "Junior Java Developer",
        company: "GFT Iberia",
        date: "June 2015 - July 2016",
        description:
            "My very first job as a developer. We worked with Java EE and Spring for a 20 year old project for Deutsche Bank Germany. As the team was quite big the agile meetings were an important part of the project working properly.",
    },
];

export const PROJECTS = [
    {
        key : "unityProj",
        projectName: "Unity Junior Programming project",
        projectLink: "https://github.com/Ooin/Programming-Theory-in-Action",
        image: PROGTHEORY_PIC,
        description:
            "A quick project to display the basic principles of programming theory: Abstraction, Encapsulation, Inheritance and Polymorphism.",
    },
    {
        key : "reactPortProj",
        projectName: "React Refs and Portals",
        projectLink: "https://github.com/Ooin/ReactRefsAndPortals",
        image: REFPORTALS_PIC,
        description:
            "In this learning project I delved in the waters of React and developed and simple game in the browser in order to explore Refs and Portals.",
    },
    {
        key : "voxelProj",
        projectName: "Voxel Defense",
        projectLink: "",
        image: VOXDEF_PIC,
        description:
            "My current project. A light tower defense with our personal architecure, no artist input, no modelling, all but sounds made in the engine.",
    },
    {
        key : "quartoProj",
        projectName: "Quarto UE4",
        projectLink: "https://dtritus.itch.io/quarto-in-ue",
        image: QUARTO_PIC,
        description:
            "Personal project to give UE4 a refresh after a long while. A prototype of hte boardgame Quarto in UE4 Blueprints developed in a couple of weeks.",
    },
    {
        key : "graduationProj",
        projectName: "Graduation Project",
        projectLink: "https://github.com/Ooin/TFG2015",
        image: TFG_PIC,
        description:
            "My first foray in Unity was my grade project for the University. I created a terrain generator with gaussian noise. Given a set of parameters like size and ammount of <i>blobs</i>, the random elements in the function, it generates a subset of islands randomly. This can be exported as a greyscale height map for future use.",
    },
    {
        key : "lightlessProj",
        projectName: "Lightless",
        projectLink: "https://github.com/Ooin/GameJam2014",
        image: LIGHTLESS_PIC,
        description:
            "The first and only time I've worked with Raylib was  with this little game developed for the Global Game Jam 2014. There I teamed up with a group of people I had never met before and created this short sidescroll shoot'em up about nightmares.",
    },
];

export const EDUCATION = [
    {
        key: "ubEd",
        logo: UB_LOGO,
        description: "Degree in computer engineering",
        institution: "Universitat de Barcelona",
        date: "2011 - 2015",
    },
    {
        key: "ue4Ed",
        logo: UDEMY_LOGO,
        description:
            "Desarrollo de juegos con Unreal Engine de 0 a profesional",
        institution: "Udemy, Carlos Coronado",
        date: "2024",
    },
    {
        key: "luztiEd",
        logo: LUZTI_LOGO,
        description: "Java Introductory course",
        institution: "Luz TI",
        date: "2015",
    },
    {
        key: "gcpEd",
        logo: GCP_LOGO,
        description: "Google Cloud: Associate Cloud Engineer",
        institution: "Online, Google Platform",
        date: "2023",
    },
    {
        key: "unityEd",
        logo: UNITY_LOGO,
        description: "Unity Junior Programmer",
        institution: "Online, Unity Technologies",
        date: "2025",
    },
];
