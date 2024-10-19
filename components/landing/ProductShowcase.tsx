/* "use client";

import ProductImage from "@/public/dev.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoBell, GoGoal } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Removing the Barrier
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
        Empowering Lives with Compassion
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
        Transforming visions of a brighter future into reality by providing essential support and care through our comprehensive welfare programs
        </div>
      </div>
      <div className="relative ">
        <motion.img
          src={Pyramid.src}
          alt="Pyramid Image"
          className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <Image src={ProductImage} alt="Product Image" className="px-1 rounded-xl" />
        <motion.img
          src={Tube.src}
          alt="Tube Image"
          className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        <div className="mt-16">
          <LuLeaf className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Empowering Communities</div>
          <div className="text-lg my-2">
          Foster connections and drive positive change in vulnerable communities every day
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <GoGoal className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Targeted Courses & Support</div>
          <div className="text-lg my-2">
          Strategically plan and execute outreach efforts to maximize impact
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <MdLockOutline className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Future Proof Certifications</div>
          <div className="text-lg my-2">
          Maintain trust with secure and transparent processes that ensure accountability
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <GoBell className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Local Languages Support</div>
          <div className="text-lg my-2">
          Stay informed with timely updates on the progress and success of our initiatives
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
*/

import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ProductShowcase = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-zinc-900/95 rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] text-white border-zinc-700 pb-10">
          Ehsaas is a strategic Learning partner for Deaf and Mute Community that
          need to raise Voice, Education , explain Complex Ideas, and Communication
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl text-zinc-100 font-semibold mb-4">Our approach:</h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
              Our approach at Ehsaas is a strategic Learning partner for Deaf and Mute Community that
              need to raise Voice, Education , explain Complex Ideas, and Communication
            </p>
            <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-blue-950 bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
              Read more
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src="deaf.jpg"
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;
