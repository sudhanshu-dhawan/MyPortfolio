import React from 'react';

export const ResumeLink = () => {
  return (
    <div className="my-4">
        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <a
        href="/files/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
        </div>
      </button>
      
    </div>
  );
};
