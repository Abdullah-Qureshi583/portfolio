// export default function About() {
//   return (
//     <section id="about" className="bg-zinc-300 py-20 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:text-center">
//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             About Me
//           </h2>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//             I am a passionate full stack developer with 5 years of experience
//             building web applications.
//           </p>
//         </div>

//         <div className="mt-10">
//           <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//             <div className="relative">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Skills
//               </h3>
//               <p className="mt-2 text-base text-gray-500">
//                 React, Next.js, Node.js, TypeScript, Python, SQL, MongoDB
//               </p>
//             </div>
//             <div className="relative">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Experience
//               </h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Senior Developer at Tech Co (2020-Present)
//                 <br />
//                 Web Developer at Startup Inc (2018-2020)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
                Enthusiastic Computer Science student at D.J. Science College
                specializing in web development and AI technologies. Proficient
                in React, Tailwind CSS, HTML, CSS, and JavaScript. Eager to
                collaborate on innovative projects and leverage my skills in a
                team setting. Passionate about Next.js, Generative AI, and the
                Metaverse. Dedicated to expanding my expertise and contributing
                to cutting-edge tech solutions.
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
