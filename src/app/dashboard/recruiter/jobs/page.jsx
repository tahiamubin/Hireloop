import CompanyJobTable from "@/app/components/dashboard/CompanyJobTable";
import { createCompany } from "@/lib/actions/company";
import { getRecruiterCompany } from "@/lib/api/companies";

import { getUserSession } from "@/lib/core/session";
import React from "react";

const RecruiterJobs = async () => {
 
  const recruiter = await getUserSession()
  const companyRecruiter = await getRecruiterCompany(recruiter?.id)
  //console.log('companyRecruiter',companyRecruiter)
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-4">
      <div className="flex items-start justify-between mb-6 mt-6 ml-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold text-white">Manage Jobs</h1>
          <p className="mt-1 text-sm text-white/45">
            View, edit, and manage all your job listings on HireLoop.
          </p>
        </div>
      </div>

      <CompanyJobTable companyRecruiter={companyRecruiter} ></CompanyJobTable>

      
    </div>
  );
};

export default RecruiterJobs;
