import { useState, useEffect } from "react";

export default function useMobileDevice() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  return isMobile;
}