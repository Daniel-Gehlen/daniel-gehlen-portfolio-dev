"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTypewriter } from "./hooks/useTypewriter";
import ProjectCardWithGif from "../components/features/projects/ProjectCardWithGif";
import {
  featuredProjects,
  Project,
} from "../components/features/projects/featuredProjects";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const name = useTypewriter("Daniel Gehlen", "Full-Stack Developer", 150, 1000);

  useEffect(() => {
    setIsClient(true);
    setProjects(featuredProjects);
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateRotation = () => {
    if (!isClient) {
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
    <main className="min-h-screen flex flex-col items-center justify-center text-gold bg-gradient-to-b from-gray-900 to-black py-8">
      <div className="text-4xl mb-8 h-12 flex items-center justify-center text-center w-full digital-font">
        {name}
      </div>

      <div
        className="relative w-64 h-64 transition-transform duration-200 ease-out mb-12"
        style={{ transform: calculateRotation() }}
      >
        <Image
          src="/user.jpeg"
          alt="Avatar Daniel Gehlen"
          fill
          className="object-cover rounded-full shadow-2xl shadow-gold/50"
          priority
        />
      </div>

      <div className="w-full px-4">
        <h2
          className="text-4xl text-center mb-12 font-bold digital-font"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px gold",
            textShadow: "0 0 10px rgba(255,215,0,0.5)",
          }}
        >
          Featured Projects
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {projects.map((project: Project) => (
              <ProjectCardWithGif key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
