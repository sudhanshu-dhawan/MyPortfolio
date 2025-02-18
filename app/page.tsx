
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/ui/Footer";
import { SignupFormDemo } from "@/components/ui/Form";
import { LampDemo } from "@/components/ui/Lamp";
import { AnimatedTooltip } from "@/components/ui/Tooltip";
import { FaHome } from "react-icons/fa";
import { SiNodedotjs, SiPostman, SiC, SiCplusplus, SiJavascript, SiMongodb, SiExpress, SiReact, SiRender } from "react-icons/si";

export default function Home() {

  const tools = [
    { id: 1, name: "Node.js", designation: "Backend Runtime", icon: <SiNodedotjs className="text-green-500 text-5xl" /> },
    { id: 2, name: "Postman", designation: "API Testing Tool", icon: <SiPostman className="text-orange-500 text-5xl" /> },
    { id: 3, name: "C", designation: "Programming Language", icon: <SiC className="text-blue-500 text-5xl" /> },
    { id: 4, name: "C++", designation: "Programming Language", icon: <SiCplusplus className="text-blue-700 text-5xl" /> },
    { id: 5, name: "JavaScript", designation: "Programming Language", icon: <SiJavascript className="text-yellow-500 text-5xl" /> },
    { id: 6, name: "MongoDB", designation: "Database", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    { id: 7, name: "Express.js", designation: "Backend Framework", icon: <SiExpress className="text-gray-500 text-5xl" /> },
    { id: 8, name: "React.js", designation: "Frontend Library", icon: <SiReact className="text-blue-400 text-5xl" /> },
    { id: 10, name: "Render", designation: "Cloud Deployment", icon: <SiRender className="text-indigo-500 text-5xl" /> },
  ];
  return (
   <main className="relative bg-black justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
       <FloatingNav
  navItems={[
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ]}
/>
        <div>
        <Hero/>
        </div>
        <br />
        <br />
         <Grid/>
         
         <div className="mt-[40px]">
          <LampDemo/>
         </div>
         <div id="projects" className="mt-[-400px]">
          <RecentProjects />
        </div>

        
         
       <div className="z-50" id="contact">
        <SignupFormDemo/>
       </div>
       <div>
        <Footer/>
       </div>

       </div>
   </main>
  );
}
