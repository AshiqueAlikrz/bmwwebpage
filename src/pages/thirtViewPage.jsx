import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ThirtViewPage = () => {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);
  const showAndHideTwo = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const showAndHideOne = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="flex items-center justify-evenly flex-col overflow-x-hidden  h-screen w-full bg-black">
      <motion.div style={{ translateX: showAndHideOne }} className="flex  justify-center items-center w-full h-3/6 bg-black">
        <div className="w-4/12 h-5/6 bg-black">
          <img className="object-cover h-full w-full" src="https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/07/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab-jpg.webp" alt=""></img>
        </div>
        <div className=" gap-2 w-7/12 h-5/6 ">
          <div className="flex flex-col w-full h-full p-10 gap-3">
            <div className=" text-2xl font-bold text-white">THE JOY OF ELECTRIC DRIVING</div>
            <h3 className="text-white">100 % electric. 100 % driving pleasure. 100 % BMW. Experience an entirely new sensation of sheer driving pleasure.</h3>
            <div>
              <button className="border-2  hover:bg-slate-400 hover:bg-opacity-20 text-white p-3">Know more</button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ translateX: showAndHideTwo }} className="flex  justify-center items-center w-full h-3/6 bg-black">
        <div className="w-4/12 h-5/6 bg-black">
          <img className="object-cover h-full w-full" src="https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/07/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab-jpg.webp" alt=""></img>
        </div>
        <div className=" gap-2 w-7/12 h-5/6">
          <div className="flex flex-col w-full h-full p-10 gap-3">
            <h1 className=" text-2xl font-bold text-white" style={{ fontFamily: "Helvetica, sans-serif" }}>
              THE JOY OF ELECTRIC DRIVING
            </h1>
            <h3 className="text-white">100 % electric. 100 % driving pleasure. 100 % BMW. Experience an entirely new sensation of sheer driving pleasure.</h3>
            <div>
              <button className="border-2  hover:bg-slate-400 hover:bg-opacity-20 text-white p-3">Know more</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirtViewPage;
