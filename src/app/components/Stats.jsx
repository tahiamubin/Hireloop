import React from "react";

const Stats = () => {
  return (
    <div className="lg:px-6 py-16 relative z-10 mt-40 mb-20  ">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-white text-4xl  leading-snug">
            Assisting over{" "}
            <span className="font-bold text-white">15,000 job seekers</span>
            <br />
            find their dream positions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10
           rounded-2xl p-6">
            <div className="text-zinc-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"
                />
              </svg>
            </div>
            <p className="text-4xl font-bold text-white mb-1">50K</p>
            <p className="text-zinc-400 text-sm">Active Jobs</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="text-zinc-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18v18H3V3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 17v-5M12 17v-9M16 17v-3"
                />
              </svg>
            </div>
            <p className="text-4xl font-bold text-white mb-1">12K</p>
            <p className="text-zinc-400 text-sm">Companies</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="text-zinc-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </div>
            <p className="text-4xl font-bold text-white mb-1">2M</p>
            <p className="text-zinc-400 text-sm">Job Seekers</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="text-zinc-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <p className="text-4xl font-bold text-white mb-1">97%</p>
            <p className="text-zinc-400 text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
