import CompanyTable from '@/app/components/dashboard/CompanyTable';
import { getCompany } from '@/lib/api/companies';
import React from 'react';

const AdminCompaniesPage = async() => {
    const companies = await getCompany()
    return (
        <div>
            <h1 className='text-4xl font-bold p-4 '>Total Company: {companies.length}</h1>
            <CompanyTable companies={companies}></CompanyTable>
        </div>
    );
};

export default AdminCompaniesPage;