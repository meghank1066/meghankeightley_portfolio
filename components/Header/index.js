"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [mounted, setMounted] = useState(false);
const router = useRouter();
const isHome = router.pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="navbar">
      <a href={isHome ? "#home" : "/#home"}>Home</a>

      <a href={isHome ? "#about" : "/#about"}>
        About
      </a>

      <a href={isHome ? "#projects" : "/#projects"}>
        Projects
      </a>

      <a
        href={isHome ? "#case-studies" : "/#case-studies"}
        className="desktop-only"
      >
        Case Studies
      </a>

      <a href={isHome ? "#contact" : "/#contact"}>
        Contact
      </a>
    </nav>
  );
};

export default Header;