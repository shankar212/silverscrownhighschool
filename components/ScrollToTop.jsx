"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // When the pathname changes or on mount, scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Disable browser's standard scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, [pathname]);

  return null;
}
