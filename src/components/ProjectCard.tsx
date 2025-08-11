import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block no-underline">
      <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md hover:bg-gray-50 transition-all duration-200">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 visited:text-gray-900 transition-colors cursor-pointer mb-4">
          {project.title}
        </h3>

        <p className="text-gray-800 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-normal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
