import AdminUsersTable from '@/app/components/dashboard/AdminUsersTable';
import { getUserList } from '@/lib/api/users';
import React from 'react';

const AdminUsersPage = async () => {
    const data = await getUserList()
    const users = data.users
    console.log(users)
    return (
        <div>
            <h1>users length: {users.length}</h1>
            <AdminUsersTable users ={users} ></AdminUsersTable>
        </div>
    );
};

export default AdminUsersPage;