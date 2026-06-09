import { serverFetch } from "../core/server"

export const getApplicationByApplicant = async (applicationId) =>{
    return serverFetch(`/jobs/application?applicationId${applicationId}`)
}