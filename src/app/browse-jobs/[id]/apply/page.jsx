import { getJobById } from "@/lib/api/jobs";
import { getUserSession } from "@/lib/core/session";
import { ShieldExclamation } from "@gravity-ui/icons";
import Link from "next/link";

import React from "react";
import ApplyJobs from "./ApplyJobs";
import { getApplicationByApplicant } from "@/lib/api/application";

const applyJobPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  // if(!user){
  //     redirect('/signin')
  // }
  if (user.role != "seeker") {
    return (
      <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
        <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldExclamation className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-100 mb-2">
            Access Restricted
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Only job seekers can apply for positions. Please sign in with a
            seeker account to proceed.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition"
          >
            Switch Account
          </Link>
        </div>
      </div>
    );
  }

  const job = await getJobById(id);
  console.log("server", job);
  const plan = {
    name: "Free",
    maxApplicationPerMonth: 3,
  };

  const applications = await getApplicationByApplicant(user?.id);

  return (
    <div>
      <h1>
        {applications.length < plan.maxApplicationPerMonth ? (
          <ApplyJobs applicant={user} job={job} />
        ) : (
          <div className="flex justify-center px-4 py-8">
            <div className="relative w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 overflow-hidden">
              {/* Red top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#5C53FE] rounded-t-2xl" />

              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center shrink-0">
                  <i
                    className="ti ti-alert-circle text-red-500 text-xl"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                    You've exceeded your free plan
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    You've used all {plan.maxApplicationPerMonth} of your
                    monthly job applications. Upgrade to keep applying without
                    interruption.
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Monthly applications
                  </span>
                  <span className="text-xs font-medium text-red-700 dark:text-red-400">
                    {applications.length} / {plan.maxApplicationPerMonth} used
                  </span>
                </div>
                <div className="h-1.5 bg-red-100 dark:bg-red-950 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-red-500 rounded-full" />
                </div>
              </div>

              {/* Features */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 mb-5">
                <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest mb-3">
                  What you get with Pro
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "30 applications per month",
                    "Unlimited saved jobs",
                    "Advanced tracking dashboard",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <i
                        className="ti ti-circle-check text-emerald-500 text-base"
                        aria-hidden="true"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2.5">
                <button className="flex-1 py-2.5 rounded-lg bg-[#5C53FE] hover:bg-white hover:text-black text-xs font-semibold transition-colors">
                  Upgrade to Pro
                </button>
                <button className="px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        )}
      </h1>
    </div>
  );
};

export default applyJobPage;
