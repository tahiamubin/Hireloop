import CompanyCard from "@/app/components/dashboard/CompanyCard";
import { getRecruiterCompany } from "@/lib/api/companies";
import { getUserSession } from "@/lib/core/session";
import { Button } from "@heroui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

const companyRecruiterPage = async () => {
  const recruiter = await getUserSession();
  const company = await getRecruiterCompany(recruiter?.id);
  console.log("company", company);

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className="text-3xl p-4">My Companies</h1>
          <p className="text-[#6a6a6a] ml-4">
            Manage your registered companies and their verification states.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {/* this is my company profile */}
        <CompanyCard
          recruiterCompany={company}
          recruiter={recruiter}
        ></CompanyCard>
      </div>
    </div>
  );
};

export default companyRecruiterPage;
