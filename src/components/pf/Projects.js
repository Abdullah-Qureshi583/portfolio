import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Password Manager",
      description:
        "A secure password manager that helps users generate, store, and manage passwords with encryption and authentication features.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      liveLink: "https://fortilock.vercel.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Projects/tree/main/NextJsBasedProjects/password-manager",
      category: "Frontend",
    },
    {
      title: "To-Do List App",
      description:
        "A task management application that allows users to add, edit, and delete tasks, with features for marking tasks as completed and filtering by status.",
      tags: ["React", "UUID", "LocalStorage"],
      liveLink: "https://aq-todolist.vercel.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/TodoList-using-react-tailwind",
      category: "Web App",
    },
    {
      title: "Currency Converter",
      description:
        "A currency converter tool providing exchange rates between multiple currencies, with a responsive and user-friendly interface.",
      tags: ["Html", "CSS", "JavaScript"],
      liveLink: "https://aq-currency-convertor.vercel.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/currency-convertor",
      category: "Web App",
    },

    {
      title: "Tic-Tac-Toe Game",
      description:
        "An interactive Tic-Tac-Toe game with score tracking and animations, built for a fun and responsive user experience.",
      tags: ["Html", "CSS", "JavaScript"],
      liveLink: "https://aq-tic-tac-toe.netlify.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/tic-tac-toe-game",
      category: "Web App",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive portfolio website featuring smooth animations, and a well-organized layout to showcase my projects and skills.",
      tags: ["Next.js", "Tailwind CSS", "Node Mailer"],
      liveLink: "#",
      githubLink: "#",
      category: "Frontend",
    },
    {
      title: "Resume Builder App",
      description:
        "A resume builder that allows users to enter their details and preview a professional resume with customizable templates.",
      tags: ["Html", "CSS", "TypeScript"],
      liveLink: "https://resume-builder-gamma-hazel.vercel.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Hackathons/tree/main/hackathon1",
      category: "Web App",
    },
    {
      title: "Spotify Client Clone",
      description:
        "A fully responsive Spotify clone with the ability to browse and listen to playlists, providing a sleek music streaming experience.",
      tags: ["Html", "CSS", "JavaScript"],
      liveLink: "https://qureshispotify.freewebhostmost.com/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Clones/tree/main/Spotify",
      category: "Full Stack",
    },
    {
      title: "Simple Calculator",
      description:
        "A basic calculator with essential arithmetic functions, built with HTML, CSS, and JavaScript. Features a clean user interface and supports addition, subtraction, multiplication, and division.",
      tags: ["JavaScript", "HTML", "CSS"],
      liveLink: "https://aq-calculator.netlify.app/",
      githubLink:
        "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/calculator",
      category: "Web App",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-purple-950/40 via-gray-900 to-gray-900/90 text-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-20 h-1  bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my featured projects that showcase my skills and
              experience in building modern web applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? projects : projects.slice(0, 3)).map(
              (project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Project Category Banner */}
                  <div className="bg-gray-800 py-2 px-4">
                    <span className="text-sm text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="pt-4 flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
