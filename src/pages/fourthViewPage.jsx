import React, { useEffect, useRef, useState } from "react";
import car1 from "../components/images/download.png";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { initialTabs as tabs } from "../components/incredients";

const FourthViewPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const ref = useRef(null);
  const isInViewText = useInView(ref);

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

  return (
    <div className="w-full h-5/6 ">
      <motion.div className="absolute w-full h-20 bg-gradient-to-b from-black ">
        <motion.ul variants={container} initial="hidden" animate={isInViewText && "visible"} viewport={{ once: true }} className="flex mt-5   justify-evenly items-center  ">
          {tabs.map((item) => (
            <motion.li
              ref={ref}
              transition={{ duration: 1 }}
              variants={items}
              key={item.label}
              className={`p-3 hover:bg-slate-200 cursor-pointer hover:bg-opacity-20 rounded-md  w-16 h-12 text-white border-2 border-gray-300  ${item === selectedTab ? "selected" : ""} `}
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
                animate= {{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-end h-screen  w-full  "
              >
                <img src={selectedTab.icon} className="object-cover h-full w-full" />

                <motion.div initial={{ x: -1000 }} transition={{ duration: 1 }} animate={isInViewText && { x: 0 }} className="p-2 absolute mb-3 h-32 w-8/12 bg-black bg-opacity-45 rounded-xs">
                  <h1 className="text-4xl font-sans font-bold text-white">BMW Xi</h1>

                  <h1 className="text-left text-opacity-75 font-sans text-white  font-light">
                    The petrol-powered BMW X1 has a 1.5-litre three-cylinder turbocharged petrol engine, which puts out 134bhp and 230Nm. Similar to the oil burner, this one is also paired with a
                    seven-speed dual-clutch transmission sending power to the front wheels only. It has a claimed mileage of 16.35kmpl.
                  </h1>
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
