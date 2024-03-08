import React, { useState } from "react";
import car1 from "../components/images/download.png";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "../components/incredients";

const FourthViewPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-28 bg-black">
        <ul className="flex  h-20 justify-evenly items-center ">
          {tabs.map((item) => (
            <li key={item.label} className={`cursor-pointer p-2 text-white border-2 rounded-lg ${item === selectedTab ? "selected" : ""} `} onClick={() => setSelectedTab(item)}>
              {` ${item.label}`}
              {item === selectedTab ? <motion.div className="underline " layoutId="underline" /> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full h-5/6  ">
        <div className="w-full h-full bg-slate-800">
          <div className=" w-full h-full bg-stone-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center flex-col  h-full w-full"
              >
                <img src={selectedTab.icon} className=" h-full w-9/12" />
                
                <h1 className="text-center text-opacity-75 font-sans text-white bg-black font-thin">
                  The petrol-powered BMW X1 has a 1.5-litre three-cylinder turbocharged petrol engine, which puts out 134bhp and 230Nm. Similar to the oil burner, this one is also paired with a
                  seven-speed dual-clutch transmission sending power to the front wheels only. It has a claimed mileage of 16.35kmpl.
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthViewPage;
