import { Avatar, Button } from "@heroui/react";
import { div } from "motion/react-client";

const TopCompanies = () => {
  const companies = [
    {
      name: "Google Inc.",
      category: "Technology",
      location: "Mountain View",
      activeJobs: 24,
      icon: "🌐",
    },
    {
      name: "Meta Platforms",
      category: "Social Media",
      location: "Menlo Park",
      activeJobs: 18,
      icon: "📘",
    },
    
  ];

  return (
    <div>
      <div className="flex flex-col gap-7 w-96 bg-[#1B1B1C] p-4
      rounded-2xl  ">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar size="lg" name={company.icon} className="rounded-xl" />
              <div>
                <p className=" text-base">{company.name}</p>
                <p className="text-sm text-default-400">
                  {company.category} • {company.location}
                </p>
              </div>
            </div>
            <div className="text-right ">
              <p className="text-lg">{company.activeJobs}</p>
              <p className="text-xs text-default-400 uppercase tracking-wide">
                Active Jobs
              </p>
            </div>
          </div>
        ))}
         <div className="flex items-center justify-center m-1">
        <Button  variant="outline">View All Companies</Button>
      </div>
      </div>
     
    </div>
  );
};

export default TopCompanies;
