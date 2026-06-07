"use client";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import RecentApplication from "@/app/components/dashboard/RecentApplication";
import TopCompanies from "@/app/components/dashboard/TopCompanies";

import { authClient, useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import React from "react";

const recruiterDashBoardHomePage = () => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    <div className="flex items-center gap-4">
      <Spinner />
    </div>;
  }
  const user = session?.user;
  return (
    <div className="m-3">
      <h1 className="font-medium text-3xl m-4"> Welcome back, {user?.name}</h1>
      <DashboardStats></DashboardStats>
      <div className="flex gap-8 ">
        <div>
          <h1 className=" text-3xl p-4">Recent Application</h1>
          <RecentApplication></RecentApplication>
        </div>
        <div>
          <h1 className=" text-3xl p-4">My Top Companies</h1>
          <TopCompanies></TopCompanies>
        </div>

      </div>
    </div>
  );
};

export default recruiterDashBoardHomePage;
