import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconMail ,IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/sudhanshu-dhawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <IconBrandGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhanshu-dhawan-199044253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <IconBrandLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/sudhanshu_334?igsh=NHdlejJjYTA5dTQz" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram className="h-6 w-6 text-white hover:text-gray-400 transition duration-150" />
          </a>
          <a
            href="mailto:sudhanshudhawan03@gmail.com"
            className="hover:text-gray-400"
          >
            <IconMail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sudhanshu Dhawan. Made with Love . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
