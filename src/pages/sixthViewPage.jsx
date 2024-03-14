import React, { useRef } from "react";
import { allCars } from "../data/avaibleCars";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const head = {
  hidden: { y: -300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const SixthViewPage = () => {
  const ref = useRef(null);
  const imageView = useInView(ref);
  return (
    <div
      className="w-full h-screen  "
    >
      <motion.h1 variants={head} initial="hidden" animate={imageView && "visible"} transition={{ duration: 1 }} className="flex justify-center mt-2 font-extralight text-4xl">
        Convenient machines
      </motion.h1>
      <motion.div variants={container} initial="hidden" animate={imageView && "visible"} className="flex  justify-evenly  flex-wrap h-screen w-full   ">
        {allCars.map((car, index) => (
          <motion.div key={index} ref={ref} variants={item} transition={{ duration: 2 }} className=" h-44 w-72">
            <div className="h-full w-full">
              <img src={car.image} className="object-fill h-full w-full " alt="reload" />
            </div>
            <div className="w-full  h-12 flex-col items-center flex justify-center">
              <h1 className="font-bold">{car.varient}</h1>
              <h2 className="font-thin">
                <em>
                  Rs. <strong>{car.price}</strong> onwards
                </em>
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SixthViewPage;
