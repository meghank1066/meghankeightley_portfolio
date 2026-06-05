import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { headerData } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>


      {/* mobile menu later */}

      <nav className="navbar">
        <a href="#">Home</a>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleAboutScroll?.();
          }}
        >
          About
        </a>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleWorkScroll?.();
          }}
        >
          Projects
        </a>

        <a href="#case-studies">
          Case Studies
        </a>

        <a
          href="#contact"
          onClick={() =>
            window.open(
              "mailto:megankeightley5@gmail.com"
            )
          }
        >
          Contact
        </a>

   
      </nav>
      
    </>
  );
};

export default Header;