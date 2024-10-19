"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import HeroImage from "@/public/assests/Visual.png";
import Cylinder from "@/public/assests/cylinder.png";
import HalfTorus from "@/public/assests/half-torus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      /* style={{
        backgroundImage: `url('mute.jpg')`,
      }} */
      ref={heroRef}
      className="bg-cover bg-center bg-no-repeat relative p-8 pb-16 md:p-10 lg:p-20 font-medium overflow-x-clip md:items-center gap-3 h-[75vh]"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1] "
        src="main.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="md:flex justify-center gap-16 items-center text-center relative z-10">
        <div className="md:w-[690px] mx-auto">
          <div className="text-5xl md:text-7xl w-full font-black my-7 text-white/50 stroke-black stroke bg-clip-text tracking-tighter">
            Empowering Voices, Bridging Silence
          </div>
          <div className="text-xl lg:text-2xl tracking-tighter opacity-85 text-white/30">
            Transforming Education for the Deaf and Mute Community—Where Every Gesture, Sign, and Silence Finds a Voice in Learning
          </div>

          <div className="flex items-center text-center justify-center gap-3 mt-6 text-lg">
            <a className="px-8 py-2 rounded-lg bg-blue-800/60 text-white/60" href="/dictionary">Start Learning</a>
            <div className="cursor-pointer hover:underline text-white/60">
              Learn more
              <FaArrowRight className="h-3 w-3 inline ml-2" />
            </div>
          </div>
        </div>

        {/* <div className="pt-12 md:pt-0 md:h-[648px] md:w-[648px] relative">
          <motion.img
            src={Cylinder.src}
            alt="Cylinder"
            className=" hidden md:block md:absolute -left-8 -top-8"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={HeroImage.src}
            alt="Hero Image"
            className="md:absolute md:h-full md:w-auto md:max-w-none"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={HalfTorus.src}
            alt="HalfTorus"
            className=" hidden lg:block md:absolute left-[400px] top-[500px]"
            style={{
              translateY: translateY,
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
