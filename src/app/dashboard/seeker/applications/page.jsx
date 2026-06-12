
import { getApplicationByApplicant } from '@/lib/api/application';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import ApplicationsTable from './applicationTable';

const page = async() => {
    const user = await getUserSession()
    const jobs = await getApplicationByApplicant(user?.id)
    console.log('server',jobs)

    return (
        <div  className="flex-1 p-6 ">
           {/* <h1 className='p-4 text-4xl font-bold'>Applications</h1> */}
           <ApplicationsTable  jobs = {jobs}></ApplicationsTable>
        </div>
    );
};

export default page;