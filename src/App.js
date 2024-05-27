import React from 'react';
import Form from './pages/Form';
import UsersTable from './pages/UserTable';
import CompaniesTable from './pages/Company';

const App = () => {
  return (
    <div className="App">
      <Form />
      <h1 className="text-2xl mb-4">Users Table</h1>
      <UsersTable />
      <h1 className="text-2xl my-4">Companies Table</h1>
      <CompaniesTable />
    </div>
  );
}

export default App;
