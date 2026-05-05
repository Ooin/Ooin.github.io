export interface Role {
  title: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  roles?: { title: string; description: string }[];
}

export const experience: Role[] = [
  {
    title: "IT consultant and Unity Developer",
    company: "Nakshisoft",
    logo: "/images/logos/nakshi.png",
    period: "October 2024 - ongoing",
    description: `Currently working full time as an IT consultant and technician. Assisting our customers by building custom solutions for their IT need such as ERP customization in Python, Javascript and CSS, data migration with golang scripting, deployment of network and cloud infrastructure and more. I'm colaborating in the development of a Unity passion project, a voxel style tower defense. The project focus strongly in its architecture using an inhouse design.`,
  },
  {
    title: "Cloud Developer",
    company: "GFT Iberia",
    logo: "/images/logos/GFT_logo.jpeg",
    period: "October 2017 - September 2024",
    description: `This team was developing a custom and native version of <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Openshift</a> for Google Cloud. We worked with github actions and <a href="https://www.terraform.io">Terraform</a> to deploy solutions when merging changes to the main branch.`,
    roles: [
      {
        title: "Salesforce and Kimble administrator",
        description: `Implementation of new functionalities on the company's Salesforce organization. I also helped managing the deployment of upgrades by the solution providers. Helpdesk action to the whole company focusing on technical issues more than functional ones. I was the main responsible of this tasks in the team.`,
      },
      {
        title: "Junior Java Developer",
        description: `A legacy project for Deutsche Bank Spain and Portugal. We developed new functionalities with JSP and Spring to the Mortgage and Loans calculator internat to DB. The team tasks were managed with Agile and logged with a Jira board linked to the git commits. We also used Spring Boot to implement RESTful APIs as part of the modernization of the project.`,
      },
    ],
  },
  {
    title: "Junior Unity and Unreal Engine 4 Developer",
    company: "3DTechOmegaZeta",
    logo: "/images/logos/3DTechOmegaZeta_logo.png",
    period: "July 2016 - June 2017",
    description: `Developing a 3D model of proteins and other biology systems interative with Unity and Unreal Engine. I also colaborated in a mock for an Android VR demo of the system in Unity. I developed two interactive screen systems for the Museum of Natural History of Doha, Qatar, in Mono and Unreal. The system developed in Mono was a 3 screen system bespoke system in which one was a touchscreen and the other 2 worked as satellites displaying information related to the selection. The second system was developed in unreal engine with a series of widgets to display information.`,
  },
  {
    title: "Junior Java Developer",
    company: "GFT Iberia",
    logo: "/images/logos/GFT_logo.jpeg",
    period: "June 2015 - July 2016",
    description: `My very first job as a developer. We worked with Java EE and Spring for a 20 year old project for Deutsche Bank Germany. As the team was quite big the agile meetings were an important part of the project working properly.`,
  },
];
