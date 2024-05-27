import React from 'react';
import Table from '../components/CustomTable';

const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Company Name', accessor: 'companyName' },
    { Header: 'Industry', accessor: 'industry' },
    // Add more columns as needed
];

const CompaniesTable = () => {
    return (
        <Table columns={columns} endpoint="companies" />
    );
};

export default CompaniesTable;
