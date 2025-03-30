import { useEffect, useState } from "react";

export const UseMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return { isMobile };
};
