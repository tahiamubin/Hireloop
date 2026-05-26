"use client";

import { Button, Link } from "@heroui/react";

const footerLinks = {
  Product: [
    { label: "Job discovery", href: "#" },
    { label: "Worker AI", href: "#" },
    { label: "Companies", href: "#" },
    { label: "Salary data", href: "#" },
  ],
  Navigations: [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
  ],
};

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ProductHuntIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 9H9v6h4a3 3 0 0 0 0-6zm0 10H5V5h8a7 7 0 0 1 0 14z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      {/* ── Main footer body ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 w-fit">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="9" cy="9" r="2" fill="#fff" />
                  </svg>
                </div>
                <span className="font-semibold text-white text-[15px] tracking-tight">
                  Hire<span className="text-violet-400">Loop</span>
                </span>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 mt-1">
                {[
                  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
                  {
                    icon: <ProductHuntIcon />,
                    href: "#",
                    label: "Product Hunt",
                  },
                  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
                ].map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex items-center justify-center w-8 h-8 rounded-lg
                      bg-white/5 text-white/50 hover:bg-white/10 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-violet-400 mb-1">
                  {heading}
                </p>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            Copyright 2024 – Programming Hero
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Terms &amp; Policy
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
