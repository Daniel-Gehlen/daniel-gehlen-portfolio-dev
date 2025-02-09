import Image from "next/legacy/image"
import { GitlabIcon as GitHub } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  owner: {
    avatar_url: string
  }
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-black bg-opacity-70 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={project.owner.avatar_url || "/placeholder.svg"}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-gold text-xl mb-2">{project.name}</h3>
        <p className="text-gold mb-4">{project.description}</p>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold text-black px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200"
        >
          <GitHub className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard

