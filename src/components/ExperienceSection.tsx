import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/portfolioData";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-6 border-t border-gray-200">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
