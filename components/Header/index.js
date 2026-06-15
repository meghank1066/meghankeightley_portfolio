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

  if (!mounted) return null;

  return (
    <>
      {/* --- ORIGINAL DESKTOP NAVBAR (Untouched) --- */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* --- BRAND NEW SEPARATE MOBILE BURGER --- */}
      <div className="mobile-nav-wrapper">
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="hamburger-btn">
                {open ? "✕" : "☰"}
              </Popover.Button>

              <Popover.Panel className="mobile-menu-dropdown">
                {({ close }) => (
                  <div className="mobile-links-container">
                    <a href="#home" onClick={() => close()}>Home</a>
                    <a href="#about" onClick={() => close()}>About</a>
                    <a href="#projects" onClick={() => close()}>Projects</a>
                    <a href="#case-studies" onClick={() => close()}>Case Studies</a>
                    <a href="#contact" onClick={() => close()}>Contact</a>
                  </div>
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
};

export default Header;