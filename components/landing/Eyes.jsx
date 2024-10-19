import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

export default function Eyes() {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="mute.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mt-24 flex flex-col gap-6 z-99 relative">
        <h1 className="text-5xl font-semibold pb-4 font-FoundersGroteskCondensed pt-20">Giving Them EHSAAS <br /> That They arent Alone</h1>
        <div className="rounded-full flex gap-2 justify-center w-fit bg-blue-950 font-NueueMontreal text-zinc-200 px-10 py-3 text-sm tracking-wider uppercase">
          Join Us!
          <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
        </div>
      </div>
    </div>


  )
}
