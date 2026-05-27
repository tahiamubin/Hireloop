"use client";

import { useState, useEffect } from "react";
import { Button, Link } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Browse Jobs", href: "#" },
    { label: "Company", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* ── Brand ── */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
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

        {/* ── Desktop nav links ── */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                relative px-3 py-1.5 text-sm font-medium text-white/70
                hover:text-white transition-colors duration-200
                after:absolute after:bottom-0 after:left-3 after:right-3
                after:h-[1.5px] after:bg-violet-400 after:scale-x-0
                after:origin-left after:transition-transform after:duration-200
                hover:after:scale-x-100
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="h-4 w-px bg-white/20" />
          <Link
            href={"/signin"}
            className="text-sm font-medium text-violet-300 hover:text-violet-100 transition-colors duration-200"
          >
            Sign In
          </Link>
           <Link href={"/signup"}>
              <Button
                fullWidth
                className="
                bg-white text-[#0d0d0d] font-semibold text-sm h-10
                rounded-xl shadow-lg shadow-black/30
                hover:bg-white/90 active:scale-[0.98] transition-all duration-200
              "
              >
                Get Started
              </Button>
            </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/[0.06]
          ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white hover:bg-white/5 text-base font-medium py-2.5 px-3 rounded-lg transition-colors duration-150 block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={"/signin"}
            className="text-violet-300 hover:text-violet-100 hover:bg-violet-500/10 text-base font-medium py-2.5 px-3 rounded-lg transition-colors duration-150 block mt-1"
          >
            Sign In
          </Link>
          <div className="pt-2 pb-1">
            <Link href={"/signup"}>
              <Button
                fullWidth
                className="
                bg-white text-[#0d0d0d] font-semibold text-sm h-10
                rounded-xl shadow-lg shadow-black/30
                hover:bg-white/90 active:scale-[0.98] transition-all duration-200
              "
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
