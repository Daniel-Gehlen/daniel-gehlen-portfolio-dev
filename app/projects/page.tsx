"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import { fetchAllRepositories } from "../utils/github"

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchAllRepositories("Daniel-Gehlen").then((data) => setProjects(data as never[]))  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-gold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

