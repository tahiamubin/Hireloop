import Image from "next/image";
import React from "react";

const NextRole = () => {
  return (
    <div className="relative">
      {/* Purple glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-[#5C53FE]/70 rounded-full blur-[70px] pointer-events-none z-10" />

      {/* BG Image */}
      <Image
        src={"/images/cta-bg.png"}
        height={100}
        width={500}
        alt="bg"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />

      {/* Content on top */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mx-auto">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-2">
          Your next role is <br /> already looking for you
        </h2>

        <p className="text-zinc-400 text-xs md:text-sm mb-5 max-w-md">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="bg-white text-black text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-xl hover:bg-zinc-200 transition-all duration-200">
            Create a free account
          </button>
          <button className="border border-white/20 text-white text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200">
            View pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextRole;