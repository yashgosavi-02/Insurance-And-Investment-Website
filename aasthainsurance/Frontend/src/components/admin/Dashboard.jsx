import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsuranceManagement() {
  const [showAddForm, setShowAddForm] = useState(false);
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="cursor-pointer" onClick={() => setShowAddForm(false)}>Users</li>
          <li className="cursor-pointer" onClick={() => setShowAddForm(true)}>Insurances</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {showAddForm ? <InsuranceCRUD /> : <UserManagement />}
      </div>
    </div>
  );
}

function InsuranceCRUD() {

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Insurance Management</h2>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add Insurance</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Delete Insurance</button>
      </div>
    </div>
  );
}

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.GET('/user/details');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Username</th>
            <th className="border border-gray-400 px-4 py-2">Password</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
            <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
            <th className="border border-gray-400 px-4 py-2">City</th>
            <th className="border border-gray-400 px-4 py-2">State</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">{user.userName}</td>
              <td className="border border-gray-400 px-4 py-2">{user.password}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
              <td className="border border-gray-400 px-4 py-2">{user.dob}</td>
              <td className="border border-gray-400 px-4 py-2">{user.city}</td>
              <td className="border border-gray-400 px-4 py-2">{user.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InsuranceManagement;
