import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BMW from "../assets/videoplayback.webm";
import Typewriter from "typewriter-effect";

const textVariants = {
  initial: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const FirstViewpage = () => {
  const { scrollYProgress } = useScroll();

  const showAndHideTwo = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const showAndHideOne = useTransform(scrollYProgress, [0, 1], ["10%", "-500%"]);

  return (
    <div className="h-screen w-full  relative">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={BMW} type="video/webm" />
      </video>

      <div className="absolute inset-0 flex-col bg-black bg-opacity-70 flex justify-between items-center">
        <div className="h-24 w-full ">
          <div className="flex items-center  h-24 w-full">
            <div className="flex h-16 w-3/12  justify-evenly">
              <a href="#Home" className="cursor-pointer text-white hover:text-blue-300">
                Home
              </a>
              <a href="#About" className="cursor-pointer text-white hover:text-blue-300">
                About
              </a>
              <a href="#Contact" className="cursor-pointer text-white hover:text-blue-300">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-10/12 h-full  ">
          <div className="flex justify-center items-center w-4/12 h-full  ">
            <motion.svg
              style={{ translateX: showAndHideOne }}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              variants={svgVariants}
              xmlns="http://www.w3.org/2000/svg"
              height="200"
              width="2500"
              viewBox="0 0 293.274 293.275"
            >
              <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="26.509" x2="266.765" y1="62.523" y2="230.752">
                <stop offset="0" stopColor="#c7d3da" />
                <stop offset="1" stopColor="#595756" />
              </linearGradient>
              <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="101.957" x2="193.75" y1="66.595" y2="225.586">
                <stop offset=".033" stopColor="#8c8c8c" />
                <stop offset=".092" stopColor="#646464" />
                <stop offset=".165" stopColor="#393939" />
                <stop offset=".23" stopColor="#1a1a1a" />
                <stop offset=".286" stopColor="#070707" />
                <stop offset=".324" />
              </linearGradient>
              <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="149.788" x2="208.776" y1="148.068" y2="207.057">
                <stop offset=".379" stopColor="#4eb4e2" />
                <stop offset=".984" stopColor="#5e8ba9" />
              </linearGradient>
              <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="134.622" x2="233.227" y1="86.989" y2="143.919">
                <stop offset=".214" stopColor="#fff" />
                <stop offset=".879" stopColor="#b3b3b3" />
              </linearGradient>
              <linearGradient id="e" gradientTransform="rotate(180 483.581 82.786)" gradientUnits="userSpaceOnUse" x1="886.663" x2="814.954" y1="76.751" y2="35.35">
                <stop offset=".308" stopColor="#5eb4e1" />
                <stop offset=".615" stopColor="#34a7db" />
              </linearGradient>
              <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="228.488" x2="66.262" y1="193.558" y2="99.896">
                <stop offset="0" stopColor="#a5abaf" />
                <stop offset="1" stopColor="#94999a" />
              </linearGradient>
              <g fill="none" stroke="#e2001a" strokeWidth=".5">
                <circle cx="147.409" cy="146.534" r="87.375" />
                <circle cx="146.874" cy="145.071" r="134.131" />
                <circle cx="147.409" cy="146.534" r="97.667" />
              </g>
              <circle cx="146.475" cy="146.924" r="141.928" />
              <path
                d="M146.637 0C65.651 0 0 65.652 0 146.638c0 80.985 65.651 146.637 146.637 146.637s146.637-65.651 146.637-146.637C293.273 65.652 227.622 0 146.637 0zm0 286.1c-77.024 0-139.463-62.44-139.463-139.462 0-77.023 62.439-139.463 139.463-139.463S286.1 69.614 286.1 146.638c0 77.022-62.44 139.462-139.463 139.462z"
                fill="url(#a)"
              />
              <path
                d="M125.466 49.721V12.884h11.313l9.934 25.938 10.071-25.8h11.037v36.699h-7.588v-25.11l-9.519 23.802h-8.14l-9.658-23.94v25.248zM259.481 74.08l-19.618 8.958 13.045-18.349-5.791-7.042-20.659 9.32 12.932-17.286-5.889-5.963-21.441 27.545 7.199 7.043 20.078-8.388-12.052 18.025 5.747 8.361 30.519-15.494z"
                fill="#fff"
              />
              <path
                d="M80.625 59.608c-4.939-3.725-10.698-.738-10.698-.738 1.694-5.266-3.426-9.509-3.426-9.509-7.521-5.724-14.176 2.462-14.176 2.462l-18.701 22.03 28.418 23.625 19.936-23.605c6.64-8.608-1.353-14.265-1.353-14.265zM44.872 70.525s10.182-11.979 10.5-12.326c1.414-1.54 3.753-1.99 5.699-.625 1.945 1.367 2.549 3.862 1.348 5.572L51.46 75.982zm30.244 1.676L63.418 85.903l-7.033-5.825s10.87-12.789 11.209-13.158c1.509-1.644 4.007-2.125 6.083-.667 2.078 1.459 2.722 4.122 1.439 5.948z"
                fill="#262626"
              />
              <path
                d="M79.261 59.043c-4.939-3.725-10.698-.738-10.698-.738 1.694-5.266-3.425-9.509-3.425-9.509-7.521-5.724-14.176 2.462-14.176 2.462l-18.701 22.03 28.418 23.625 19.936-23.605c6.64-8.608-1.354-14.265-1.354-14.265zM43.509 69.96s10.182-11.979 10.5-12.326c1.413-1.54 3.752-1.99 5.698-.625 1.946 1.367 2.55 3.862 1.349 5.572L50.097 75.417zm30.244 1.676L62.054 85.338l-7.033-5.825s10.87-12.789 11.209-13.158c1.51-1.644 4.007-2.125 6.084-.667 2.077 1.459 2.721 4.123 1.439 5.948z"
                fill="#fff"
              />
              <circle cx="147.853" cy="146.091" fill="url(#b)" r="91.778" />
              <path d="M144.882 232.059c-45.298 0-83.828-38.605-83.41-84.1h83.293z" fill="#fff" stroke="#999" strokeWidth="1.966" />
              <path d="M149.78 232.059c45.297 0 83.897-38.475 83.897-84.1h-83.78z" fill="url(#c)" stroke="#424f51" strokeWidth="1.966" />
              <path d="M234.73 148.969h-83.78l-.115 79.447-.019 4.65h-1.962l.122-86.055h85.752z" fill="#647180" />
              <path d="M149.78 60.736c45.297 0 81.26 38.263 83.879 82.438l-83.763-.059z" fill="url(#d)" stroke="#a6a6a6" strokeWidth="1.954" />
              <path d="M144.882 60.736c-45.298 0-83.37 37.318-83.37 82.379h83.253z" fill="url(#e)" stroke="#a1bbd1" strokeWidth="1.954" />
              <path
                d="M144.862 59.682h.979v1.884l-1.963.066c-21.997.266-42.209 9.429-56.998 24.002-14.789 14.579-24.133 34.551-24.403 56.426h-.002v1.946h-1.967v-.974c.012-45.614 38.504-83.342 84.354-83.35z"
                fill="#bbd8ea"
              />
              <path d="M150.636 142.119V59.788c-.329-.004-.652-.026-.984-.026h-.982l.002.974.118 83.357 85.896.08-.063-1.021c-.018-.274-.05-.544-.069-.818h-12.852l-70.954-.201z" fill="#4d4d4d" />
              <circle cx="147.018" cy="146.525" fill="none" r="139.462" stroke="#262626" strokeWidth="1.1" />
              <path
                d="M83.631 82.984c-16.316 16.318-26.402 38.844-26.402 63.743 0 24.897 10.086 47.424 26.402 63.741 16.32 16.317 38.844 26.404 63.743 26.404 24.898 0 47.425-10.087 63.743-26.404 16.315-16.317 26.403-38.844 26.403-63.741 0-24.899-10.088-47.425-26.403-63.743-16.318-16.317-38.845-26.404-63.743-26.404-24.899.001-47.423 10.087-63.743 26.404zm-29.902 63.744c.002-51.721 41.926-93.646 93.646-93.648 51.721.002 93.646 41.927 93.647 93.648-.002 51.72-41.927 93.644-93.647 93.646-51.721-.003-93.645-41.927-93.646-93.646z"
                fill="url(#f)"
              />
            </motion.svg>
          </div>

          <div className="flex w-7/12 flex-col justify-center">
            <motion.div style={{ translateX: showAndHideTwo }} initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="flex justify-start">
              <h1 className="m-0 text-zinc-50 text-11xl font-extrabold  ">BMW</h1>
            </motion.div>

            <motion.div
              style={{ translateX: showAndHideTwo }}
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              variants={textVariants}
              className="text-4xl ml-2 font-extralight  text-white"
            >
              <Typewriter
                options={{
                  strings: ["Experience an entirely new sensation of sheer\n driving pleasure.", "Check out a variety of BMW finance offers available across the BMW range."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstViewpage;
