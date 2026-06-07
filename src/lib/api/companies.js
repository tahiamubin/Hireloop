import { serverFetch } from "../core/server";
import { getUserSession } from "../core/session";

export const getRecruiterCompany = async (recruiterId) => {
  return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`); // recruiter er company info 
};

export const getLoggedInRecruiterCompany = async () => {
  const user = await getUserSession(); // recruiter er info
  return getRecruiterCompany(user?.id); // recruiter info + company info
};
