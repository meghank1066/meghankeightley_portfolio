import React from "react";
import Button from "../Button";
import { useTheme } from "next-themes"; 

import yourData from "../../data/portfolio.json";
const Socials = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div className={`${className} flex flex-wrap justify-center items-center gap-6`}>
      {yourData.socials.map((social, index) => {
        const logoSrc = social.title === "Github" && theme === "dark" 
          ? social.dmgitlogo 
          : social.logo;

        return (
          <Button
            key={index}
            onClick={() => window.open(social.link, "_blank")}
            className="p-2"
          >
            <img
              src={logoSrc}
              alt={social.title}
              className="w-12 h-12 object-contain"
            />
          </Button>
        );
      })}
    </div>
  );
};

export default Socials;