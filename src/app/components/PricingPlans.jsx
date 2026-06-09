"use client";
import React, { useState } from "react";
import Link from "next/link";
// Gravity UI Icons for a polished visual identity
import {
  Check,
  CircleQuestion,
  ChevronDown,
  Person,
  Briefcase,
  Rocket,
  // Zap,
  Star,
} from "@gravity-ui/icons";

const PricingPage = () => {
  // State to toggle between 'seeker' and 'recruiter' pricing tiers
  const [billingTarget, setBillingTarget] = useState("seeker");
  // State to track opened accordion items in the FAQ section

  // Organized Data Structuring based directly on your provided image & text parameters
  const seekerPlans = [
    {
      name: "Free",
      id: "seeker_free",
      price: "$0",
      period: "/forever",
      description:
        "Essential features for getting started and organizing your initial search tracking.",
      icon: <Person className="w-5 h-5 text-zinc-400" />,
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile page",
        "Standard email alerts",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      id: "seeker_pro",
      price: "$19",
      period: "/month",
      description:
        "Our most popular option for serious active candidates looking to rapidly accelerate landing a role.",
      icon: <Star className="w-5 h-5 text-blue-400" />,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Advanced application tracking dashboard",
        "Comprehensive salary insights",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Premium",
      id: "seeker_premium",
      price: "$39",
      period: "/month",
      description:
        "Uncapped potential and priority visibility tools tailored for elite competitive talent placement.",
      icon: <Star className="w-5 h-5 text-purple-400" />,
      features: [
        "Everything in Pro + Unlimited applications",
        "Profile boost directly to recruiter feeds",
        "Early access to freshly published jobs",
        "24/7 Priority customer support queue",
      ],
      cta: "Go Premium",
      popular: false,
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      id: "recruiter_free",
      price: "$0",
      period: "/forever",
      description:
        "Ideal baseline solution matching startups launching their initial hiring infrastructure pipeline.",
      icon: <Briefcase className="w-5 h-5 text-zinc-400" />,
      features: [
        "Up to 3 active job posts simultaneously",
        "Basic applicant management pipeline",
        "Standard organic listing search visibility",
        "Great for a company’s first year of hiring",
      ],
      cta: "Start Free Posting",
      popular: false,
    },
    {
      name: "Growth",
      id: "recruiter_growth",
      price: "$49",
      period: "/month",
      description:
        "Expanded allocation built for expanding companies with active multi-departmental team tracks.",
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
      features: [
        "Up to 10 active job posts simultaneously",
        "Full automated applicant tracking workflow",
        "Basic listing performance metrics & analytics",
        "Dedicated email support desk response",
      ],
      cta: "Scale Your Hiring",
      popular: true,
    },
    {
      name: "Enterprise",
      id: "recruiter_enterprise",
      price: "$149",
      period: "/month",
      description:
        "High performance structural operations for organizations with continuous large-scale talent acquisition.",
      icon: <Star className="w-5 h-5 text-purple-400" />,
      features: [
        "Up to 50 active job posts simultaneously",
        "Advanced interactive analytics visual dashboard",
        "Premium featured job listing styling boosts",
        "Multi-user team collaboration seats",
        "Custom corporate branding options",
        "Dedicated account manager + priority support",
      ],
      cta: "Contact Corporate Tier",
      popular: false,
    },
  ];

  const activePlans = billingTarget === "seeker" ? seekerPlans : recruiterPlans;

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Title Typography */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2  border-white/30 rounded-md px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE]  inline-block"></span>
            <span className="text-white text-xs tracking-widest uppercase font-medium">
              Pricing
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE] inline-block"></span>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl  font-bold leading-snug">
            Pay for the leverage, <br /> not the listings
          </h1>
          <p className="text-zinc-400  mb-2 text-sm sm:text-base leading-relaxed">
          Whether you are an ambitious job seeker hunting for your next <br />
          milestone or an expanding operation tracking down pristine talent, we
          have got you covered.
        </p>
        </div>
        

        {/* Switch Segment Control Toggle Grid Wrapper */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setBillingTarget("seeker")}
              className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                billingTarget === "seeker"
                  ? "bg-zinc-800 text-white shadow-md border border-zinc-700/50"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Person className="w-4 h-4" />
              For Job Seekers
            </button>
            <button
              onClick={() => setBillingTarget("recruiter")}
              className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                billingTarget === "recruiter"
                  ? "bg-zinc-800 text-white shadow-md border border-zinc-700/50"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              For Recruiters
            </button>
          </div>
        </div>

        {/* 3-Tier Pricing Cards Grid Layout Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24 ">
          {activePlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-zinc-900 border rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[480px] hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
           transition-all duration-300 hover:-translate-y-1
                                }`}
            >
              {/* Popular Highlight Pill */}
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold
                                 text-white bg-[#5C53FE] rounded-full uppercase tracking-wider shadow-md"
                >
                  Most Popular
                </span>
              )}

              {/* Plan Name & Core Header Metadata */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {plan.name}
                  </h3>
                  <div className="p-2 bg-zinc-950/60 rounded-lg border border-zinc-800/80">
                    {plan.icon}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                {/* Dynamic Price Indicator Text Block */}
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-50 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    {plan.period}
                  </span>
                </div>

                <hr className="border-zinc-800/80 mb-6" />

                {/* Interactive Checkbox Checklist Array Mapping */}
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs text-zinc-300"
                    >
                      <div
                        className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex
                                             items-center justify-center shrink-0 mt-0.5"
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Action CTA Callout Anchor Point */}
              <div className="mt-8">
                <form action="/api/checkout_sessions" method="POST">
                  <input type="hidden" name="plan_id" value={plan.id} />
                  <section>
                    <button
                      type="submit"
                      role="link"
                      className={`block w-full text-center text-xs font-semibold px-4 py-3 rounded-xl
                                                 transition duration-200 ${
                                                   plan.popular
                                                     ? "bg-[#5C53FE] hover:bg-white hover:text-black shadow-lg shadow-blue-900/20"
                                                     : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/50"
                                                 }`}
                    >
                      Checkout
                    </button>
                  </section>
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section Layout Wrapper */}
      </div>
    </div>
  );
};

export default PricingPage;
