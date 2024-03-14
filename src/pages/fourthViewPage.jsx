import React, {  useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { allIngredients } from "../data/incredients";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 500, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const FourthViewPage = () => {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0]);
  const ref = useRef(null);
  const isInViewText = useInView(ref);

  return (
    <div className="w-full h-5/6 ">
      <motion.div className="absolute w-full h-20 bg-gradient-to-b from-black ">
        <motion.ul variants={container} initial="hidden" animate={isInViewText && "visible"} viewport={{ once: true }} className="flex mt-5   justify-evenly items-center  ">
          {allIngredients.map((item) => (
            <motion.li
              ref={ref}
              transition={{ duration: 1 }}
              variants={items}
              key={item.label}
              className={`flex justify-center p-3 hover:bg-slate-200 cursor-pointer hover:bg-opacity-20 rounded-md  w-28 h-12 text-white border-2 border-gray-300  ${item === selectedTab ? "selected" : ""} `}
              onClick={() => setSelectedTab(item)}
            >
              {` ${item.label}`}
              {item === selectedTab ? <motion.div className="underline " layoutId="underline" /> : null}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="flex w-full h-5/6">
        <div className="w-full h-full">
          <div className="flex items-center w-full h-full bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-end h-screen  w-full  "
              >
                <img src={selectedTab.icon} className="object-cover h-full w-full" alt="reload" />

                <motion.div initial={{ x: -1000 }} transition={{ duration: 1 }} animate={isInViewText && { x: 0 }} className="p-2 absolute mb-10 h-auto w-8/12 bg-black bg-opacity-45 rounded-xs">
                  <h1 className="text-4xl font-sans font-bold text-white">BMW {selectedTab.label}</h1>

                  <h1 className="text-left text-opacity-75 text-2xl font-sans text-white  font-thin">{selectedTab.description}</h1>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthViewPage;
