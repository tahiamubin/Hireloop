import { serverFetch } from "../core/server";

export const getApplicationByApplicant = async (applicantId) => {
  return serverFetch(`/jobs/application?applicantId=${applicantId}`);
};
