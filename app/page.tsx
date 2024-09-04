
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";


import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/ui/Footer";
import { SignupFormDemo } from "@/components/ui/Form";
import { LampDemo } from "@/components/ui/Lamp";


import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          {name:"Home", link:"/",icon:<FaHome/>}
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
         <div className="mt-[-400px]">
          <RecentProjects  /> 
         </div>
         
       <div className="z-50">
        <SignupFormDemo/>
       </div>
       <div>
        <Footer/>
       </div>

       </div>
   </main>
  );
}
