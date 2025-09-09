"use client";

import Image from "next/image";
import { Project } from "./featuredProjects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCardWithGif({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 bg-opacity-70 border border-gold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.gif_url || "/placeholder.gif"}
          alt={`Demo do projeto ${project.name}`}
          fill
          className="object-cover"
          unoptimized={project.gif_url?.endsWith(".gif")}
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gold">{project.name}</h3>
        <p className="text-gray-300 mb-4 flex-grow">
          {project.description || "No description available."}
        </p>
        <div className="flex justify-between mt-auto">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Code
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-gold text-gold px-4 py-2 rounded-lg font-semibold hover:bg-gold hover:text-gray-900 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
