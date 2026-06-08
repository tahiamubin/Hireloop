import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobs = async () => {
  const res = await fetch(`${baseUrl}/jobs`) 
  return res.json()
}
export const getCompanyJobs = async (companyId, status = "active") => {
  const res = await fetch(`${baseUrl}/jobs?companyId=${companyId}&status=${status}`);
  console.log(res)
  return res.json();
};
