import React from 'react';
import { DashboardSidebar } from '../components/dashboard/DashboardSiderbar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidebar></DashboardSidebar>
            <div className={"flex"}>{children}</div>
        </div>
    );
};

export default DashboardLayout;