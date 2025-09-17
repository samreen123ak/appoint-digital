"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
      mirror: true,
      offset: 300,
    });
  }, []);

  return <>{children}</>;
}
