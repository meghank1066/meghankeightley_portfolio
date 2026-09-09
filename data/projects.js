import Link from "next/link";


// College Projects
const projects = [
    {
    slug: "sporex-mould-identification",
    title: "SPOREX – Mould Identification App",
    description:
      "A web application developed for the Asthma Society of Ireland to help users identify mould types, understand associated health risks and access guidance on prevention and treatment.",
    image: "/images/sporex_display.png",
    github: "https://github.com/...",
    tech: ["React", "Node.js", "MongoDB"]
  },  {
  slug: "nexspace-vr",
  title: "NexSpace VR",
  description:
    "An immersive virtual reality experience built for Meta Quest using Unity and C#. Worked as a C# Developer, Creative Director and Asset Manager, implementing interactive features, directing the project's creative vision and managing the integration and optimisation of 3D assets across the application.",
   image: "/images/nexspace/nexspace-cover2.png",
  category: "Virtual Reality"
},
  {
    slug: "velora-dublin-bike-app",
    title: "Velora – Dublin Bike Mobile App",
    description:
      "A mobile cycling application designed to help Dublin commuters locate bike stations, plan routes and access real-time cycling information.",
    image: "/images/velora_final.png",
    github: "https://github.com/...",
    tech: ["Swift", "MapKit", "Firebase"]
  }

];
// case studies
const casestudies = [

  //  {
  //   slug: "sporex-mould-identification",
  //   title: "SPOREX – Mould Identification App",
  //   description:
  //     "A web application developed for the Asthma Society of Ireland to help users identify mould types, understand associated health risks and access guidance on prevention and treatment.",
  //   image: "/projects/sporex.png",
  //   github: "https://github.com/...",
  //   tech: ["React", "Node.js", "MongoDB"]
  // },

  // {
  //   slug: "velora-dublin-bike-app",
  //   title: "Velora – Dublin Bike Mobile App",
  //   description:
  //     "A mobile cycling application designed to help Dublin commuters locate bike stations, plan routes and access real-time cycling information.",
  //   image: "/projects/velora.png",
  //   github: "https://github.com/...",
  //   tech: ["Swift", "MapKit", "Firebase"]
  // },

  // {
  //   slug: "style-forecast-weather-api",
  //   title: "Style Forecast – API",
  //   description:
  //     "A weather-powered application that integrates external APIs to provide personalised outfit recommendations based on local conditions and forecasts.",
  //   category: "Backend & API Integration",
  //   tech: ["C#", ".NET", "REST APIs", "API Integration"],
  //     image: "/images/lookbook-cover.png",
  //   github: "https://github.com/...",
  //   tech: ["React", "Weather API", "JavaScript"]
  // },

  // {
  //   slug: "glamour-touch-salon",
  //   title: "Glamour Touch",
  //  description:
  // "A modern beauty salon booking system designed to elevate the client experience, allowing effortless appointment scheduling and streamlined management for salon staff through a clean, structured web application.",
  // category: "Full Stack Development",  
  // image: "/images/glamour-touch-pic.png",
  //   github: "https://github.com/RathnamMeghana/Beauty_Cosmetics_Laravel",
  //   tech: ["PHP", "Database Migrations", "SCSS"]
  // },

  // {
  //   slug: "little-star-app",
  //   title: "Little Star – Education App Design",
  //   description:
  //     "A user-centred UX/UI design project created in Figma, focused on improving communication, scheduling and daily activity tracking for parents and childcare providers.",
  //   image: "/projects/littlestaracademy.png",
  //   github: "",
  //   tech: ["Figma", "UX Research", "Prototyping"]
  // },
  
  // {
  //   slug: "nintendo-switch-ui",
  //   title: "Nintendo Switch Experience",
  //   description:
  //     "Reimagining navigation, discoverability and accessibility across Nintendo's gaming ecosystem.",
  //   category: "Product Design",
  //   image: "/images/nintendo-switch-cover.png"
  // }, lol
]

// case studies
const graphicdesign = [
  {
    slug: "nintendo-switch-ui",
    title: "Nintendo Switch Experience",
    description:
      "Reimagining navigation, discoverability and accessibility across Nintendo's gaming ecosystem.",
    category: "Product Design",
    image: "/images/nintendo-cover.jpg"
  },
]

const resume = {
  slug: "resume-meghan-keightley",
  title: "Meg's Resume",
  description:
    "UX/UI Designer and Frontend Developer specialising in creating user-centred digital experiences through research, design and modern web technologies.",
  pdf: "/resume/meg-resume.pdf",
  sections: {
    skills: [
      "UX/UI Design",
      "Frontend Development",
      "React",
      "Next.js",
      "JavaScript",
      "Figma",
      "Prototyping",
      "User Research"
    ],

    experience: [
      {
        role: "UX/UI Designer & Frontend Developer",
        company: "Freelance / Personal Projects",
        date: "2025 - Present",
        description:
          "Designed and developed responsive digital experiences, combining UX research, interface design and frontend implementation."
      }
    ],

    education: [
      {
        course: "MSc Computing / User Experience Design",
        institution: "University",
        date: "2025 - 2026"
      }
    ]
  }
};
 


export { projects, casestudies, resume};