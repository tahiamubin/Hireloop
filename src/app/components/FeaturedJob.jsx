"use client";
import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { CiSaveDown2, CiSearch } from "react-icons/ci";
import { LuMousePointerClick } from "react-icons/lu";
import { PiBuildingApartment, PiNewspaper } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { TbBuildingArch, TbHexagonMinus2 } from "react-icons/tb";

const FeaturedJob = () => {
  return (
    <div className="lg:px-6 py-16 relative z-10 mt-40 mb-20 bg-[#151516]">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2  border-white/30 rounded-md px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C53FE] inline-block"></span>
            <span className="text-white text-xs tracking-widest uppercase">
              Features Job
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C53FE] inline-block"></span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-white text-4xl font-medium leading-snug">
            Everything you need <br /> to succeed
          </p>
        </div>

        {/* Features Grid */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          {/* Row 1 */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* Smart Search */}
            <div className="border-r border-b border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                {/* icon */}
                <CiSearch
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Smart Search
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Find your ideal job with advanced filters.
                </p>
              </div>
            </div>

            {/* Salary Insights */}
            <div className="border-r border-b border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <SlGraph
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Salary Insights
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Get real salary data to negotiate confidently.
                </p>
              </div>
            </div>

            {/* Top Companies */}
            <div className="border-r border-b border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <BsGraphUp
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Top Companies
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Apply to vetted companies that are hiring.
                </p>
              </div>
            </div>

            {/* Saved Jobs */}
            <div className="border-b border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <CiSaveDown2
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Saved Jobs
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Manage apps & favorites on your dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* One-Click Apply */}
            <div className="border-r border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <LuMousePointerClick
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  One-Click Apply
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Simplify your job applications for an easier process!
                </p>
              </div>
            </div>

            {/* Resume Builder */}
            <div className="border-r border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <PiNewspaper
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Resume Builder
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Create professional resumes with modern templates.
                </p>
              </div>
            </div>

            {/* Skill-Based Matching */}
            <div className="border-r border-white/10 p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <TbHexagonMinus2
                  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Skill-Based Matching
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Discover jobs that match your skills and experience.
                </p>
              </div>
            </div>

            {/* Career Growth Resources */}
            <div className="p-5 flex gap-3 items-start">
              <div className="mt-0.5 text-zinc-400 shrink-0">
                <SlGraph  size={30}
                  className="bg-gradient-to-br from-black to-zinc-800 p-1 
                rounded-xl text-purple-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Career Growth Resources
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Boost your career with quick interview tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
