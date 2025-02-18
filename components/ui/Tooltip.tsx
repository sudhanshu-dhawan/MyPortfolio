"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image?: string;
    icon?: JSX.Element;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          className="relative group flex justify-center items-center"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 10 } }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 text-xs"
              >
                <div className="font-bold text-white text-base">{item.name}</div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Render Image or Icon */}
          {item.image ? (
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="rounded-full h-20 w-20 border-2 border-white object-cover transition-transform group-hover:scale-110"
            />
          ) : (
            <div className="h-20 w-20 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white overflow-hidden">
              <span className="text-5xl">{item.icon}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
