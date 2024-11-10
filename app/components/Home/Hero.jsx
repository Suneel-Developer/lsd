"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-40">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-50"
      >
        <motion.img
          src="/assets/acid-trip.webp"
          alt="acidtriplogowhite-online-kaufen"
          className="h-40 cursor-pointer mb-5"
        />
        <motion.h2
          className="text-[#717CC0] text-5xl md:text-[66px] md:leading-[60px] font-normal bowlbyonesc mb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          LSD <br />
          DERIVATE
        </motion.h2>

        <motion.p
          className="text-white text-[22px] font-normal mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Diskret und schnell zu dir nach hause geliefert
        </motion.p>

        <motion.button
          className="w-fit p-[15px] pb-[10px] text-white font-normal text-2xl text-center rounded-md flex items-center justify-center gap-3 bg-[#717CC0] hover:bg-white hover:text-[#717CC0] group elementor-animation-pulse"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Jetzt kaufen
          <svg
            aria-hidden="true"
            className="h-5 transition-all duration-500 group-hover:fill-[#717CC0]"
            fill="white"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm139.7-29.7c-3.5-3.5-9.4-3.1-12.3.8-45.3 62.5-40.4 150.1 15.9 206.4 56.3 56.3 143.9 61.2 206.4 15.9 4-2.9 4.3-8.8.8-12.3L299.7 226.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9-4 2.9-4.3 8.8-.8 12.3l210.8 210.8c3.5 3.5 9.4 3.1 12.3-.8 45.3-62.6 40.5-150.1-15.9-206.4z"></path>
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/ACIDTRIP.LIQUID-online-kaufen.png"
          alt="ACIDTRIP.LIQUID-online-kaufen"
          loading="lazy"
          className="w-full -mt-20 md:-mt-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
