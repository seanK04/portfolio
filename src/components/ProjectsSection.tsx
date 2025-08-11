import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 px-6 border-t border-gray-200">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          AI/ML Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
