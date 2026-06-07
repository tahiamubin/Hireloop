import PostNewJobModal from "@/app/components/dashboard/PostNewJob.Modal";
import { getLoggedInRecruiterCompany, getRecruiterCompany } from "@/lib/api/companies";
import { getCompanyJobs } from "@/lib/api/jobs";
import { getUserSession } from "@/lib/core/session";

import { Table, Chip, Button, Tooltip } from "@heroui/react";

import { Eye, Edit2, Trash2 } from "lucide-react";

const RecruiterJobsPage = async () => {
    // const company = await getLoggedInRecruiterCompany()
    // console.log(company)
//   const companyId = "company123";
  //const jobs = await getCompanyJobs(companyId);

    const recruiter = await getUserSession()
    const companyRecruiter = await getRecruiterCompany(recruiter?.id)
    console.log('company ',companyRecruiter)
   

  
  return (
    <div className="m-6">
      {/* Page Header */}
      

      {/* Table */}
     

      {/* add new job */}
      <PostNewJobModal companyRecruiter={companyRecruiter} ></PostNewJobModal>
    </div>
  );
};

export default RecruiterJobsPage;
