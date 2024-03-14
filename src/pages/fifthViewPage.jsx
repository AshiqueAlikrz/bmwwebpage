import React, { useRef } from "react";
import Bgimage from "../assets/martin-katler--iNRphxCMJ4-unsplash.jpg";
import Bgimage2 from "../assets/bmnew.png";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";

const FifthViewPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isInViewText = useInView(ref);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "370%"]);
  return (
    <div ref={ref} className="h-screen w-full grid place-items-center relative">
      <motion.h1
        style={{
          y: textY,
          marginBottom: "400px",
          transition: "0.5s ease-out",
          overflow: "hidden",
        }}
        className="font-extrabold  text-white  text-12xl z-10"
      >
        BMW M340i
      </motion.h1>
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, backgroundImage: `url(${Bgimage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-opacity-50 bg-gray-900 z-10"></div>
      </motion.div>
      <div className="absolute inset-0 z-20" style={{ backgroundImage: `url(${Bgimage2})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
      <div className="flex justify-center text-white items-center h-44 w-full bg z-40 font-sans  text-2xl">
        <Typewriter
          options={{
            strings: [
              "The BMW M340i xDrive Shadow offers outstanding driving dynamics and comprehensive",
              " Technologically modern support for the driver in the new sporty design.",
              "Excellent power development: 0-100km/h in 4.4 seconds,",
              " Masterful precision: precise handling and masterful agility.",
              " Motorsport genetics : Exclusive cockpit feeling with the new BMW curved display.",
              " Breathtaking driving dynamics that release adrenalin at every moment.",
            ],
            autoStart: true,
            loop: true,
            delay: 50, 

          }}
        />
      </div>
    </div>
  );
};

export default FifthViewPage;
