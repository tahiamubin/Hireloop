import { protectedFetch, serverFetch } from "../core/server";

export const getApplicationByApplicant = async (applicantId) => {
  // return serverFetch(`/jobs/application?applicantId=${applicantId}`);
  return protectedFetch(`/jobs/application?applicantId=${applicantId}`);
};
