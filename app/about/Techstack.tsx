import React from "react";
import { DiJava, DiNodejs, DiJavascript1, DiReact, DiMongodb, DiGit, DiPython } from "react-icons/di";
import { SiTypescript, SiVuedotjs, SiAngular, SiMysql, SiPostgresql, SiDocker, SiKubernetes } from "react-icons/si";

export default function Techstack() {
  return (
    <div>
      <h2 className="text-gold text-2xl mb-8 text-center">💡 Core Skills</h2>

      {/* Back-End Development */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Back-End Development</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiJava />
            <p className="text-sm mt-2">Java Spring Boot</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiNodejs />
            <p className="text-sm mt-2">Node.js</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiPython />
            <p className="text-sm mt-2">Python</p>
          </div>
        </div>
      </div>

      {/* Front-End Development */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Front-End Development</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiJavascript1 />
            <p className="text-sm mt-2">JavaScript</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiTypescript />
            <p className="text-sm mt-2">TypeScript</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiReact />
            <p className="text-sm mt-2">React</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiVuedotjs />
            <p className="text-sm mt-2">Vue.js</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiAngular />
            <p className="text-sm mt-2">Angular</p>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Database Management</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiMysql />
            <p className="text-sm mt-2">MySQL</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiMongodb />
            <p className="text-sm mt-2">MongoDB</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiPostgresql />
            <p className="text-sm mt-2">PostgreSQL</p>
          </div>
        </div>
      </div>

      {/* DevOps & Tools */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">DevOps & Tools</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiDocker />
            <p className="text-sm mt-2">Docker</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <SiKubernetes />
            <p className="text-sm mt-2">Kubernetes</p>
          </div>
          <div className="tech-icons text-6xl flex flex-col items-center">
            <DiGit />
            <p className="text-sm mt-2">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}