import React from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Header />
      </div>
      <main className="max-w-screen-lg mx-auto">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <div className="mt-6 flex justify-center space-x-8">
            <a
              href="https://github.com/seanK04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sk40"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:seanskim04@gmail.com"
              className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
