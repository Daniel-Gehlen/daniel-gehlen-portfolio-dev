"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTypewriter } from "./hooks/useTypewriter";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const name = useTypewriter("Daniel Gehlen", "Software Developer", 150, 1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateRotation = () => {
    if (typeof window === "undefined") {
      return "rotateX(0deg) rotateY(0deg)";
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxRotation = 10;

    const rotateY = ((mousePosition.x - centerX) / centerX) * maxRotation;
    const rotateX = -((mousePosition.y - centerY) / centerY) * maxRotation;

    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gold">
      {/* Contêiner do texto com altura fixa */}
      <div className="text-4xl mb-8 h-12 flex items-center justify-center text-center w-full" style={{ fontFamily: "Digital, sans-serif" }}>
        {name}
      </div>
      <div
        className="relative w-64 h-64 transition-transform duration-200 ease-out"
        style={{ transform: calculateRotation() }}
      >
        <Image src="/user.jpeg" alt="Avatar" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
    </main>
  );
}
