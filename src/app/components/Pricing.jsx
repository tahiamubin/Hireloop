import React, { useState } from "react";
import { BiSolidCrown } from "react-icons/bi";
import {
  BsFillFileBarGraphFill,
  BsFillLightningChargeFill,
} from "react-icons/bs";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="lg:px-6 py-16 relative z-10  pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2  border-white/30 rounded-md px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE]  inline-block"></span>
            <span className="text-white text-xs tracking-widest uppercase font-medium">
              Pricing
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE] inline-block"></span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-white text-4xl font-medium leading-snug">
            Pay for the leverage, <br /> not the listings
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                billing === "monthly" ? "bg-white text-black" : "text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billing === "yearly" ? "bg-white text-black" : "text-white"
              }`}
            >
              Yearly
              <span className="bg-[#DC02CE] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Starter */}
          <div
            className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between
            hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
           transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BiSolidCrown className=" text-purple-400 text-lg " />

                  <span className="text-white font-semibold">Starter</span>
                </div>
                <div className="text-right">
                  <span className="text-white text-3xl font-bold">$0</span>
                  <span className="text-zinc-400 text-xs">/month</span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-4">
                Start building your insights hub:
              </p>

              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Daily AI
                  match brief (top 5)
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Verified
                  salary bands
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Company
                  insight dashboards
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> 1-click
                  apply, unlimited
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full flex items-center justify-between border border-white/10 rounded-xl px-5 py-3 text-white text-sm hover:bg-white/5 transition-all">
              Choose This Plan
              <span>→</span>
            </button>
          </div>

          {/* Growth */}
          <div
            className="border border-transparent rounded-2xl p-6 flex flex-col justify-between
           bg-white/5 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
           transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BsFillFileBarGraphFill className=" text-purple-400 text-lg " />
                  <span className="text-white font-semibold">Growth</span>
                </div>
                <div className="text-right">
                  <span className="text-white text-3xl font-bold">$17</span>
                  <span className="text-zinc-400 text-xs">/month</span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-4">
                Start building your insights hub:
              </p>

              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Daily AI
                  match brief (top 5)
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Verified
                  salary bands
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Company
                  insight dashboards
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> 1-click
                  apply, unlimited
                </li>
              </ul>
            </div>

            <button
              className="mt-8 w-full flex items-center justify-between bg-white
            rounded-xl px-5 py-3 text-black text-sm hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
           transition-all duration-300 hover:-translate-y-1"
            >
              Choose This Plan
              <span>→</span>
            </button>
          </div>

          {/* Premium */}
          <div
            className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between
            hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
           transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BsFillLightningChargeFill className=" text-purple-400 text-lg " />
                  <span className="text-white font-semibold">Premium</span>
                </div>
                <div className="text-right">
                  <span className="text-white text-3xl font-bold">$99</span>
                  <span className="text-zinc-400 text-xs">/month</span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-4">
                Start building your insights hub:
              </p>

              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Everything
                  in Pro
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span>{" "}
                  Multi-profile career portfolios
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Shared
                  talent rooms
                </li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="text-zinc-400 text-base">+</span> Recruiter
                  view (read-only)
                </li>
              </ul>
            </div>

            <button
              className="mt-8 w-full flex items-center justify-between border border-white/10
             rounded-xl px-5 py-3 text-white text-sm hover:bg-white/5 transition-all"
            >
              Choose This Plan
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
