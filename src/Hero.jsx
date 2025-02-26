import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black pt-10 md:pt-0">
      {/* Rotating Cube */}
      <motion.div
        className="relative w-[450px] h-[400px] max-w-full"
        animate={{
          rotateX: [0, 30, 0, -30, 0],
          rotateY: [0, 45, 45, -45, -45],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          { className: "front", transform: "translateZ(225px)" },
          { className: "back", transform: "translateZ(-225px) rotateY(180deg)" },
          { className: "left", transform: "translateX(-225px) rotateY(-90deg)" },
          { className: "right", transform: "translateX(225px) rotateY(90deg)" },
        ].map((face, index) => (
          <div
            key={index}
            className="absolute w-[450px] h-[400px] bg-white border border-gray-300 flex items-center justify-center text-white text-xl font-bold"
            style={{ transform: face.transform }}
          >
            <div className="flex flex-col absolute top-10 left-10 items-center text-center">
              <img
                src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67094393682de8d96652a577_logo.svg"
                alt="U Digital Studio Logo"
                className="h-24 w-auto mb-5"
              />
            </div>
            <div className="absolute bottom-10 left-8 text-8xl font-bold text-black">
              DIGITAL <br /> STUDIO
            </div>
          </div>
        ))}
      </motion.div>

      {/* New Text Section */}
      <div className="flex justify-between items-center w-full max-w-screen-xl px-1 text-white mt-12">
        <p className="text-left text-sm sm:text-base md:text-xs w-1/3">  
          READY TO FIND YOUR NEXT IDEAL  
          <br /> TEMPLATE  
        </p>
        <p className="text-center text-sm sm:text-base md:text-xs w-1/3">  
          UPS <br /> DIGITAL STUDIO  
        </p>
        <p className="text-right text-sm sm:text-base md:text-xs w-1/3">  
          MADE TO LEAVE A MARK.  
        </p>
      </div>
    </div>
  );
};

export default Hero;
