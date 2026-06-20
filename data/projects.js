import Link from "next/link";


// College Projects
const projects = [
  {
    slug: "sporex-mould-identification",
    title: "SPOREX – Mould Identification App",
    description:
      "A web application developed for the Asthma Society of Ireland to help users identify mould types, understand associated health risks, and access guidance on prevention and treatment.",
    image: "/projects/sporex.png",
    github: "https://github.com/...",
    tech: ["React", "Node.js", "MongoDB"]
  },

  {
    slug: "velora-dublin-bike-app",
    title: "Velora – Dublin Bike Mobile App",
    description:
      "A mobile cycling application designed to help Dublin commuters locate bike stations, plan routes, and access real-time cycling information.",
    image: "/projects/velora.png",
    github: "https://github.com/...",
    tech: ["Swift", "MapKit", "Firebase"]
  },

  {
    slug: "style-forecast-weather-api",
    title: "Style Forecast – API",
    description:
      "A weather-powered application that integrates external APIs to provide personalised outfit recommendations based on local conditions and forecasts.",
    image: "/projects/styleforecast.png",
    github: "https://github.com/...",
    tech: ["React", "Weather API", "JavaScript"]
  },

  {
    slug: "little-star-app",
    title: "Little Star – Education App Design",
    description:
      "A user-centred UX/UI design project created in Figma, focused on improving communication, scheduling, and daily activity tracking for parents and childcare providers.",
    image: "/projects/littlestaracademy.png",
    github: "",
    tech: ["Figma", "UX Research", "Prototyping"]
  }
];
// case studies
const casestudies = [
  {
    slug: "nintendo-switch-ui",
    title: "Nintendo Switch Experience",
    description:
      "Reimagining navigation, discoverability, and accessibility across Nintendo's gaming ecosystem.",
    category: "Product Design",
    image: "/images/nintendo-cover.jpg"
  },

  {
    slug: "penneys-primark-redesign",
    title: "Primark App Redesign",
    description:
      "Improving product discovery, store navigation, and shopping journeys for mobile users.",
    category: "Product Design",
    image: "/images/penneys-cover.png"
  },

  {
    slug: "evelynn-coffee",
    title: "Evelynn Coffee",
    description:
      "Creating a complete digital coffee experience, from brand identity to mobile ordering and loyalty rewards.",
    category: "Brand & Product Design",
    image: "/images/evelynn-cover.webp"
  },
//    {
//   "slug": "dr-martens-redesign",
//   "title": "Dr. Martens E-Commerce",
//   "description": "Improving product discovery, sizing confidence, and mobile shopping journeys for fashion consumers.",
//   "category": "UX/UI Design",
//   "image": "/images/doc-martens-cover.png"
// },
// {
//   "slug": "costa-coffee-app",
//   "title": "Costa Coffee Rewards",
//   "description": "Enhancing loyalty experiences, mobile ordering, and personalised customer journeys.",
//   "category": "Mobile UX",
//   "image": "/images/costa-cover.png"
// },
//   {
//     "slug": "cerave-redesign",
//     "title": "CeraVe Digital Experience",
//     "description": "Enhancing skincare education and product selection through user-centred design.",
//     "category": "UX Research",
//     "image": "/images/cerave-cover.png"
//   },
//   {
//     "slug": "onitsuka-redesign",
//     "title": "Onitsuka Tiger E-Commerce",
//     "description": "Exploring navigation, product filtering, and conversion improvements for fashion retail.",
//     "category": "Brand & UX",
//     "image": "/images/onitsuka-cover.png"
//   }
]

// case studies
const graphicdesign = [
  {
    slug: "nintendo-switch-ui",
    title: "Nintendo Switch Experience",
    description:
      "Reimagining navigation, discoverability, and accessibility across Nintendo's gaming ecosystem.",
    category: "Product Design",
    image: "/images/nintendo-cover.jpg"
  },
]


export { projects, casestudies };