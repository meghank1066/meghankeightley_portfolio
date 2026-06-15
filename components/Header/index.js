import React, { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>

      <a href="#case-studies" className="desktop-only">
        Case Studies
      </a>

      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Header;