import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { bannerData } from "../data/banner";

const ThirtViewPage = () => {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInview]);

  const showAndHideOne = useTransform(scrollYProgress, [0, 1], ["76%", "-100%"]);
  const showAndHideTwo = useTransform(scrollYProgress, [0, 1], ["-185%", "250%"]);

  return (
    <div ref={containerRef} className="flex items-center justify-evenly flex-col overflow-x-hidden  h-screen w-full ">
      <motion.div style={{ translateX: showAndHideOne, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)" }} className="flex  justify-center items-center w-full h-3/6 ">
        <div className="w-4/12 h-5/6 ">
          <img className="object-cover h-full w-full" src={bannerData[0].image} alt="reload"></img>
        </div>
        <div className=" gap-2 w-7/12 h-5/6 ">
          <div className="flex flex-col w-full h-full p-10 gap-3">
            <h6 className="text-gray-600 font-mono text-xl">{bannerData[0].benefits}</h6>
            <div className=" text-6xl font-thin ">{bannerData[0].text}</div>
            <h3 className="text-2xl font-extralight">{bannerData[0].description}</h3>
            <div>
              <button className="border-4 border-gray-400 hover:bg-slate-800 hover:bg-opacity-20  p-3">Know more</button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ translateX: showAndHideTwo, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)" }} className="flex  justify-center items-center w-full h-3/6 ">
        <div className="w-4/12 h-5/6">
          <img className="object-cover h-full w-full" src={bannerData[1].image} alt=""></img>
        </div>
        <div className=" gap-2 w-7/12 h-5/6">
          <div className="flex flex-col w-full h-full p-10 gap-3">
            <h6 className="text-gray-600 font-mono text-xl">{bannerData[1].benefits}</h6>

            <h1 className=" text-6xl font-thin">{bannerData[1].text} </h1>
            <h3 className="text-2xl font-extralight">{bannerData[1].description}</h3>
            <div>
              <button className="border-4 border-gray-400 hover:bg-slate-800 hover:bg-opacity-20  p-3">Know more</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirtViewPage;
