"use client";
import React from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Inputs";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        props.className
      )}
    />
  );
};

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 md:p-8 rounded-2xl bg-black text-white relative border border-gray-800 transition-all duration-300 hover:border-transparent hover:shadow-[0_0_15px_3px_rgba(0,128,255,0.6)]">
      <h2 className="font-bold text-xl text-neutral-200 text-center">
        Contact Me
      </h2>
      <p className="text-neutral-400 text-sm text-center mt-2">
        You can contact me by submitting the form below anytime. Let&#39;s connect!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Enter first name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Enter last name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="emailid@123.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message here" rows={4} />
        </LabelInputContainer>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md h-10 font-medium shadow-md transition-all duration-300 transform hover:scale-105"
          type="submit"
        >
          Submit &rarr;
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-600 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          {socialLinks.map((link, index) => (
            <button
              key={index}
              className="flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-md bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              type="button"
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sudhanshu-dhawan",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-300" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sudhanshu-dhawan-199044253/",
    icon: <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sudhanshu_334?igsh=NHdlejJjYTA5dTQz",
    icon: <IconBrandInstagram className="h-4 w-4 text-neutral-300" />,
  },
];

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
