import Link from "next/link";

// Retail / Fashion Projects
const projects = [
  {
    slug: "dkit-fashion-society",
    title: "DKIT Fashion Society",
    description:
      "Founded and led DKIT's first Fashion Society, creating a community centred around fashion, creativity and self-expression. Organised events and activities that brought students together while building the society's identity and presence within the college.",
    image: "/images/career/dkit-fashion-society.png",
    category: "Fashion & Community",
  },
];

// Case Studies
const casestudies = [];

// Graphic Design
const graphicdesign = [];

// Resume
const resume = {
  slug: "resume-meghan-keightley",
  title: "Meg's Resume",
  description:
    "Fashion retail professional with experience in customer service, teamwork and fast-paced retail environments, alongside a strong creative background in fashion and design.",
  pdf: "/resume/meg-resume.pdf",
  sections: {
    skills: [
      "Customer Service",
      "Fashion Retail",
      "Visual Merchandising",
      "Teamwork",
      "Communication",
      "Fashion Trends",
      "Styling",
      "Stock Management",
    ],

    experience: [
      {
        role: "Sales Assistant",
        company: "Penneys Drogheda",
        date: "2023 - 2025",
        description:
          "Worked in a fast-paced fashion retail environment, providing customer service, maintaining shop floor standards, supporting stock operations and working collaboratively as part of a busy retail team.",
      },
      {
        role: "Sales Assistant",
        company: "Penneys Dundalk",
        date: "2026 - Present",
        description:
          "Supporting customers and day-to-day retail operations while maintaining high standards across the shop floor, stock areas and fitting rooms.",
      },
    ],

    education: [
      {
        course: "BSc (Hons) Computing in Software Development",
        institution: "Dundalk Institute of Technology",
        date: "2022 - 2026",
      },
    ],
  },
};

export { projects, casestudies, resume };