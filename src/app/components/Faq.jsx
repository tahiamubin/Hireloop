"use client";
import { CircleQuestion } from "@gravity-ui/icons";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, absolutely. All our premium tiers operate on flexible, non-binding month-to-month subscription structures. You can easily modify, downgrade, or cancel your renewal configurations through your profile billing dashboard settings at any time with no penalties.",
    },
    {
      question: "How do refunds work if I change my mind?",
      answer:
        "We maintain a 14-day satisfaction policy. If you determine the premium features aren’t a proper fit for your current search or hiring sequence within your initial two weeks of service, reach out to support for a complete refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support all major international credit/debit networks including Visa, Mastercard, American Express, and Discover. Enterprise-grade recruiters also have options to establish monthly or annual invoicing arrangements via bank wire transfers.",
    },
    {
      question: "What happens if I decide to switch plans mid-month?",
      answer:
        "If you upgrade your plan tier mid-cycle, the transition occurs immediately, and your remaining days on the old tier are applied as a pro-rated credit toward your updated invoice. Downgrades take effect starting with your subsequent billing date.",
    },
  ];
  return (
    <div>
      {/* FAQ Accordion Section Layout Wrapper */}
      <div className="max-w-3xl mx-auto border-t mb-30 border-zinc-800 pt-16">
        <div className="text-center mb-10">
          {/* Label */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2  border-white/30 rounded-md px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE]  inline-block"></span>
              <span className="text-white text-xs tracking-widest uppercase font-medium">
                FAQ SECTION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC02CE] inline-block"></span>
            </div>
          </div>
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
            <CircleQuestion className="w-5 h-5" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Have concerns regarding billing pipelines? Find instant clarify
            indicators below.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left p-4 gap-4 text-zinc-200 hover:text-white transition"
                >
                  <span className="text-sm font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Accordion Element View Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
                                             ${
                                               isOpen
                                                 ? "max-h-40 border-t border-zinc-800/60"
                                                 : "max-h-0"
                                             }`}
                >
                  <div className="p-4 text-xs text-zinc-400 leading-relaxed bg-zinc-900/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
