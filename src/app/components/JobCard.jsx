import { Button } from "@heroui/react";
import React from "react";

const JobCard = () => {
  return (
    // className="min-h-screen bg-black flex items-center justify-center px-6 py-10"
    <div className="container mx-auto bg-black">
      {/* Header */}
      <div>
        <div className="text-center mt-20 mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="rounded-full bg-violet-500 inline-block" />
            <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium">
              Smart Job Discovery
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight">
            The roles you'd never
            <br />
            find by searching
          </h1>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {/* cards */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 group">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-200">
              Frontend Developer
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Showcase your commitment to diversity and inclusion by
              highlighting initiatives
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-800 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              New York, USA
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-800 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
              Hybrid
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-800 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              €25–€40/hour
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors duration-200 group/btn">
            Apply Now
            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Button */}

      <div className="flex justify-center pb-10">
        <Button
          className=" bg-white  text-[#0d0d0d]  flex  font-semibold text-sm h-10
                      rounded-xl shadow-lg shadow-black/30 
                      hover:bg-white/90 active:scale-[0.98] transition-all duration-200 "
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
