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
    slug: "primark-redesign",
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
{
  "slug": "costa-coffee-app",
  "title": "Costa Coffee Rewards",
  "description": "Enhancing loyalty experiences, mobile ordering, and personalised customer journeys.",
  "category": "Mobile UX",
  "image": "/images/costa-cover.png"
},
  {
    "slug": "cerave-redesign",
    "title": "CeraVe Digital Experience",
    "description": "Enhancing skincare education and product selection through user-centred design.",
    "category": "UX Research",
    "image": "/images/cerave-cover.png"
  },
  {
    "slug": "onitsuka-redesign",
    "title": "Onitsuka Tiger E-Commerce",
    "description": "Exploring navigation, product filtering, and conversion improvements for fashion retail.",
    "category": "Brand & UX",
    "image": "/images/onitsuka-cover.png"
  }
]


export { projects, casestudies };