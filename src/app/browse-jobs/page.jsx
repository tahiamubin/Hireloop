import { getJobs } from "@/lib/api/jobs";
import JobCard from "../components/Jobs/JobCard";

export default async function Page() {
  // Fetched server-side on the initial request
  const jobs = await getJobs();
  console.log('server ',jobs)

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold  tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">
          Discover your next engineering challenge.
        </p>

        <div className="grid grid-cols-3 gap-7 mt-7">
          {jobs &&
            jobs.map((job) => <JobCard key={jobs._id} job={job}></JobCard>)}
        </div>
      </div>
    </div>
  );
}
