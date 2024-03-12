import React, { useRef } from "react";
import Bgimage from "../assets/martin-katler--iNRphxCMJ4-unsplash.jpg";
import Bgimage2 from "../assets/bmnew.png";
import { motion, useScroll, useTransform } from "framer-motion";

const FifthViewPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div ref={ref} className="h-screen w-full grid place-items-center relative">
        <motion.h1 style={{ y: textY }} className="font-extrabold  text-black text-12xl z-10">
          Hello BMW
        </motion.h1>
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, backgroundImage: `url(${Bgimage})`, backgroundPosition: "center", backgroundSize: "cover" }}></motion.div>
      <div className="absolute inset-0 z-20" style={{ backgroundImage: `url(${Bgimage2})`, backgroundPosition: "bottom", backgroundSize: "cover" }}></div>
    </div>
  );
};

export default FifthViewPage;
