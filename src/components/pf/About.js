import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen inset-0 bg-gradient-to-br from-purple-950/40 via-gray-900 to-gray-900/90  text-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1  bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction Card */}
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Hi, I&apos;m Abdullah Qureshi
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed">
                Aspiring full-stack web developer specializing in Next.js,
                React, and modern web technologies. Skilled in JavaScript,
                TypeScript, and Tailwind CSS, with a strong passion for
                Generative AI, Web 3.0, and the Metaverse. Always eager to
                learn, collaborate on innovative projects, and contribute to
                cutting-edge tech solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-xl font-medium text-gray-100 mb-6">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="space-y-3">
                  <h5 className="text-blue-400 font-medium">Frontend</h5>
                  <div className="space-y-2">
                    {["Next.js", "React", "Tailwind CSS"].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Backend */}
                <div className="space-y-3">
                  <h5 className="text-purple-400 font-medium">Backend</h5>
                  <div className="space-y-2">
                    {["Node.js", "Express", "MongoDB"].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Tools */}
                <div className="space-y-3">
                  <h5 className="text-blue-400 font-medium">Tools</h5>
                  <div className="space-y-2">
                    {["Git", "VS Code", "Vercel"].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
