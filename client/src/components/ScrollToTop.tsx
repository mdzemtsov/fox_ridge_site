import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          target.scrollIntoView({ block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
