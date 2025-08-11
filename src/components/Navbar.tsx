import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/portfolio/" || location.pathname === "/portfolio";

  // Handle hash scrolling when navigating from detail pages
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on detail page, navigate to home page with hash
      // Use the base path from vite config
      const basePath = import.meta.env.BASE_URL || '/';
      window.location.href = `${basePath}#${sectionId}`;
    }
  };

  return (
    <nav style={{position: 'sticky', top: 0, zIndex: 50}} className="w-full bg-white shadow-sm">
      <div className="max-w-screen-lg mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
          <a
            href={isHomePage ? "#home" : `${import.meta.env.BASE_URL}#home`}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleNavClick("home");
              }
            }}
            className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors no-underline text-base"
          >
            Home
          </a>
          <a
            href={isHomePage ? "#about-me" : `${import.meta.env.BASE_URL}#about-me`}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleNavClick("about-me");
              }
            }}
            className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors no-underline text-base"
          >
            About Me
          </a>
          <a
            href={isHomePage ? "#experience" : `${import.meta.env.BASE_URL}#experience`}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleNavClick("experience");
              }
            }}
            className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors no-underline text-base"
          >
            Experience
          </a>
          <a
            href={isHomePage ? "#projects" : `${import.meta.env.BASE_URL}#projects`}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleNavClick("projects");
              }
            }}
            className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors no-underline text-base"
          >
            Projects
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
