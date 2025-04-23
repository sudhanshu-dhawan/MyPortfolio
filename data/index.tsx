import Image1 from '@/images/codingverse (2).png'
import Image2 from '@/images/Giffy-removebg-preview.png'
import Image3 from '@/images/chef-cooker-dessert-cook.jpg'
import Image7 from "@/images/chatImage.webp"
import Image5 from '@/images/travellers-celebrating.webp'
import Image6 from '@/images/Image6.jpg'
import Interview from '@/images/Interview.png'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFirebase, SiNextdotjs, SiVercel } from 'react-icons/si';
import { MdChatBubbleOutline } from 'react-icons/md'; // for Vapi (if it's used for AI chat)

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      description: [
        
        <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
  <h2 className="text-xl font-bold">Know Who I Am</h2>
  <ul className="list-disc pl-5 space-y-2">
    <li>Hi, I'm Sudhanshu Dhawan, a passionate third-year Computer Engineering student at Thapar University.</li>
    <li>My journey in the tech world began with curiosity and quickly evolved into a deep fascination with web development.</li>
    <li>I thrive on the challenge of turning complex problems into elegant, user-friendly solutions.</li>
    <li>As a web development enthusiast, I'm constantly exploring new technologies and refining my skills in both front-end and back-end.</li>
    <li>My projects reflect my commitment to creating responsive, dynamic, and visually appealing web experiences.</li>
    <li>Beyond coding, I enjoy collaborating with like-minded individuals to bring innovative ideas to life.</li>
    <li>I'm always eager to learn and grow, and I look forward to contributing to the ever-evolving field of web development.</li>
  </ul>
</div>
      ],


      className: " lg:col-span-3 md:col-span-6 md:row-span-4",
      imgClassName: "w-full ",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Constantly looking for  new challenges and opportunities ",

      description: [],
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Crafting digital experiences that blend creativity with code",
      description:[ ],
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description:[ ],
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Connect with me anytime ",
      description: [
          <span className=' font-bold'>Email me at: <a href="mailto:sudhanshudhawan03@gmail.com" target="_blank" rel="noopener noreferrer">sudhanshudhawan03@gmail.com</a></span>,
          <span className=' font-bold'>GitHub: <a href="https://github.com/sudhanshu-dhawan" target="_blank" rel="noopener noreferrer">https://github.com/sudhanshu-dhawan</a></span>,
          <span className=' font-bold'>LinkedIn: <a href="https://www.linkedin.com/in/sudhanshu-dhawan-199044253/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sudhanshu-dhawan-199044253/</a></span>
      ],
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
  },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: [],
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [

    {
      id: 1,
      title: "Coding Verse ",
      des: "An edtech platform made for students to learn coding. Different instructors can sell their own courses !",
      img: Image1,
      iconLists: [FaReact, SiTailwindcss, FaNodeJs ,SiMongodb],
      link: "https://codingverse-full.onrender.com/",
    },

    {
      id: 2,
      title: "IntervueAI",
      des: "A platform where you can take customized realtime interviews with AI. Its an ongoing project.",
      img: Interview,
      iconLists: [SiFirebase , SiNextdotjs , SiTailwindcss , MdChatBubbleOutline  ],
      link: "https://github.com/sudhanshu-dhawan/IntervueAI",
    },
    {
      
      id: 3,
        title: "Travel Companion",
        des: "A travel companion app with real-time location-based assistance using Google Maps API and Rapid API",

        img: Image5,
        iconLists: [FaReact, SiTailwindcss],
        link: "https://travel-companion-flax.vercel.app/",
    },
    {
        id: 4,
        title: "Little Chef",
        des: "An application which can give cooking recipes on user input.",
        img: Image3,
        iconLists: [FaReact, SiTailwindcss],
        link: "https://littlechef-brown.vercel.app/",
      },
      
      {
       id: 5,
      title: "GIFFY",
      des: "Basic Application which generates random gifs as well as gifs on user input.",
      img: Image2,
      iconLists: [FaReact, SiTailwindcss],
      link: "https://sudhanshu-dhawan.github.io/gif_generator/",
      },
      {
        id: 6,
        title: "IPL INSIGHT",
        des: "Ipl match winner prediction using machine learning",

        img: Image6,
        iconLists: [FaReact, SiTailwindcss],
        link: "https://github.com/sudhanshu-dhawan/IPL_INSIGHT",
      },
      {
        id: 7,
        title: "Whisp",
        des: "A real-time chat application with instant messaging and user authentication for seamless communication",

        img: Image7,
        iconLists: [FaReact, SiTailwindcss],
        link: "https://chatapp-frontend-dipo.onrender.com/",
      },
     

  ];
  

  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

