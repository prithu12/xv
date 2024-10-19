"use client"

import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full py-8 rounded-b-3xl"
    >
      <div className="text text-[20vw] leading-none uppercase border-t-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden text-zinc-200">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-5xl font-bold"
        >
          We are Ehsaas ◦
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
