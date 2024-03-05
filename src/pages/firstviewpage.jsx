import React from "react";
import { motion } from "framer-motion";
import BMW from "../components/backgroundvideo/BMW VIDEO.webm";

const FirstViewpage = () => {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1, // Ensure the drawing effect for the paths
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-screen w-full  relative">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={BMW} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black opacity-70 flex justify-center items-center">
        <div className="flex w-10/12 h-4/6 bg-white">
          <div className="flex justify-center items-center w-4/12 h-full bg-black ">
            <motion.svg initial="hidden" animate="visible" variants={svgVariants} xmlns="http://www.w3.org/2000/svg" viewBox="38.771 40.433 292.87 292.87" height="200" width="200">
              <motion.circle variants={pathVariants} cx="185.206" cy="186.868" fill="none" r="141.935" stroke="#6f6e6f" strokeWidth="9" />
              <motion.path
                variants={pathVariants}
                fill="#6f6e6f"
                d="m98.422 186.879c0-47.933 38.855-86.787 86.789-86.789 47.931.002 86.784 38.855 86.786 86.789-.002 47.931-38.855 86.784-86.786 86.787-47.934-.003-86.789-38.856-86.789-86.787zm28.883-57.904c-14.823 14.827-23.982 35.283-23.984 57.904.002 22.62 9.161 43.077 23.984 57.903 14.827 14.821 35.283 23.982 57.906 23.984 22.618-.002 43.074-9.163 57.901-23.984 14.822-14.826 23.982-35.283 23.984-57.903-.002-22.621-9.162-43.077-23.984-57.904-14.827-14.823-35.283-23.982-57.901-23.984-22.623.002-43.079 9.161-57.906 23.984z"
              />
              <motion.path variants={pathVariants} fill="#0066ad" d="m98.458 186.874h86.795v-86.784h-.006c-47.932.002-86.786 38.853-86.789 86.784z" />
              <motion.path variants={pathVariants} fill="#0066ad" d="m271.979 186.83h-86.795v86.841h.006c47.931-.002 86.786-38.91 86.789-86.841z" />
            </motion.svg>
          </div>

          <div className="flex flex-col justify-center  bg-black ">
            <h1 className="text-white text-11xl font-bold">BMW</h1>
            <h2 className="text-4xl text-white">Experience an entirely new sensation of sheer driving pleasure</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstViewpage;
