"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Link } from "@heroui/react";
import Role from "./JobCard";
import JobCards from "./JobCard";
import Stats from "./Stats";

const stats = [
  { icon: "💼", value: "50K", label: "Active Jobs" },
  { icon: "🏢", value: "12K", label: "Companies" },
  { icon: "👤", value: "2M", label: "Job Seekers" },
  { icon: "⭐", value: "97%", label: "Satisfaction Rate" },
];

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function Banner() {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  return (
    <div className="bg-black">
      <section className="relative  min-h-screen bg-black text-white overflow-hidden flex flex-col">
        {/* image */}
        <div>
          <div>
            <Image
              src={"/images/earth.png"}
              height={1000}
              width={1800}
              alt="globe"
              className=" absolute top-0 left-0 w-full opacity-90 mt-50"
            ></Image>
          </div>
        </div>

        {/* ── Layer 1: cta-bg.png wireframe dome — behind everything, bottom-anchored ── */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none z-0">
          <Image
          src="/cta-bg.png"
          alt=""
          width={1320}
          height={880}
          className="w-full h-auto"
          priority
        />
        </div> */}

        {/* ── Layer 3: radial purple glow above globe ── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
       bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(109,40,217,0.28),transparent_70%)]
        pointer-events-none z-[2]"
        />

        {/* ── Hero text content ── */}
        <div className="relative z-10 flex flex-col items-center justify-start pt-36 px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            className="flex items-center gap-2 bg-white/5 border rounded-full
         px-4 py-1.5 text-xs font-medium text-white/70 mb-8"
          >
            <span>🔥</span>
            <span>
              <span className="text-white font-bold">50,000+</span> NEW JOBS
              THIS MONTH
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-center leading-tight max-w-2xl mb-5">
            Find Your Dream Job Today
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-sm sm:text-base text-center max-w-lg leading-relaxed mb-10">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and find your next role — faster.
          </p>

          {/* ── Search bar ── */}
          <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl flex items-center p-1.5 mb-4 backdrop-blur-sm">
            {/* Job input */}
            <div className="flex items-center gap-2 flex-1 px-3">
              <svg
                className="w-4 h-4 text-white/30 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Job title, skill or company"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full py-1.5"
              />
            </div>

            {/* Divider */}
            <span className="h-6 w-px bg-white/10 mx-1 shrink-0" />

            {/* Location input */}
            <div className="flex items-center gap-2 flex-1 px-3">
              <svg
                className="w-4 h-4 text-white/30 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Location or Remote"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full py-1.5"
              />
            </div>

            {/* Search button */}
            <Button
              size="sm"
              className="bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-4 h-9 shrink-0 min-w-[40px] transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </Button>
          </div>

          {/* Trending tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/40">
            <span>Trending Position</span>
            {trending.map((tag) => (
              <button
                key={tag}
                onClick={() => setJobQuery(tag)}
                className="bg-white/5 border border-white/10 hover:border-violet-500/50 hover:text-white/80 text-white/50 rounded-full px-3 py-1 transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

         {/* stats section */}
      <Stats></Stats>
      </section>
     
      {/* jobs card */}
      <JobCards></JobCards>
    </div>
  );
}
