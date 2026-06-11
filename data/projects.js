import Link from "next/link";

const projects = [
  {
    slug: "SPOREX",
    title: "SPOREX - Mould Identification App",
    description:
      "Mould Identification Application for the Asthma Society of Ireland.",
      image: "/projects/sporex.png",
    github: "https://github.com/...",
    tech: [
      "React",
      "Node",
      "MongoDB"
    ]
  },

  {
    slug: "bike-dublin",
    title: "Velora - Dublin Bike App",
    description:
      "Swift cycling application for Dublin city.",
     image: "/projects/velora.png",
    github: "https://github.com/..."
  },

  {
    slug: "weather-api",
    title: "Style Forecast - Weather-Based Outfit API",
    description:
      "API that recommends outfits based on weather.",
     image: "/projects/styleforecast.png",
    github: "https://github.com/..."
  },

  {
    slug: "figma-school",
    title: "Little Star Academy - School App Design",
    description:
      "User-centred design project for school students created in Figma.",
   image: "/projects/littlestaracademy.png",
  }
];

export default projects;