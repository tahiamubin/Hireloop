// components/StatsCard.jsx
// Reusable stats card component matching the dark dashboard UI
// Compatible with Next.js + Tailwind CSS + HeroUI v3

import { Card, CardBody } from "@heroui/react";

/**
 * StatsCard - A reusable stat display card
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon       - Icon element to display (e.g. HeroUI Icon or SVG)
 * @param {string}          props.label      - Stat label text (e.g. "Total Job Posts")
 * @param {string|number}   props.value      - Stat value (e.g. 48 or "1,284")
 * @param {string}          [props.className] - Optional extra Tailwind classes for the card
 */
export default function StatsCard({ icon, label, value, className = "" }) {
  return (
    <Card
      className={`
        bg-[#1B1B1C]
        border border-[#2a2a2e]
        rounded-xl
        mt-5
        shadow-none
        min-w-[180px]
        ${className}
      `}
    >
      <Card.Content className="flex flex-col gap-6 p-5 ">
        {/* Icon */}
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#2a2a2e] text-white">
          {icon}
        </div>

        {/* Label + Value */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#8a8a8e] font-normal leading-tight">
            {label}
          </span>
          <span className="text-2xl font-semibold text-white tracking-tight">
            {typeof value === "number" ? value.toLocaleString() : value}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
}