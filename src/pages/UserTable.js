import React from 'react';
import Table from '../components/CustomTable';

const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    // Add more columns as needed
];

const UsersTable = () => {
    return (
        <Table columns={columns} endpoint="users" />
    );
};

export default UsersTable;
