"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import useMobileDevice from "../../hooks/useMobileDevice";

const Header = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
   const isMobile = useMobileDevice();
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={`navbar ${className}`}>
      {/* <a href={isHome ? "#home" : "/#home"}>Home</a> */}

      <a href={isHome ? "#about" : "/#about"}>
        About
      </a>

      <a href={isHome ? "#case-studies" : "/#projects"}>
        Projects
      </a>

      {/* <a
        href={isHome ? "#case-studies" : "/#case-studies"}
        className="desktop-only"
      >
        Case Studies
      </a> */}

      <a href={isHome ? "#contact" : "/#contact"}>
        Contact
      </a>
     <a href="/resume/resume-meghan-keightley">
  Resume
</a>
 {/* {mounted && isMobile === false && (
  <button
    className="themeToggle"
    onClick={() =>
      setTheme(
        theme === "dark"
          ? "light"
          : "dark"
      )
    }
  >
    <img
      src={
        theme === "dark"
          ? "/images/sun.svg"
          : "/images/moon.svg"
      }
      alt="Toggle Theme"
    />
  </button>
)} */}
    </nav>
  );
};

export default Header;