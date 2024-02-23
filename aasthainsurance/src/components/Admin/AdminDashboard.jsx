import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [userData, setUserData] = useState([]);
    const [registrationData, setRegistrationData] = useState([]);
    const [documentData, setDocumentData] = useState([]);

    useEffect(() => {
        fetchUserData();
        fetchRegistrationData();
        fetchDocumentData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('backend/admin/user/login');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user login data:', error);
        }
    };

    const fetchRegistrationData = async () => {
        try {
            const response = await axios.get('backend/admin/user/registration');
            setRegistrationData(response.data);
        } catch (error) {
            console.error('Error fetching user registration data:', error);
        }
    };

    const fetchDocumentData = async () => {
        try {
            const response = await axios.get('backend/admin/documents');
            setDocumentData(response.data);
        } catch (error) {
            console.error('Error fetching document data:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

            {/* User Login Data */}
            <section>
                <h2 className="text-xl font-bold mb-2">User Logins</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">User ID</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Login Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.loginTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* User Registration Data */}
            <section>
                <h2 className="text-xl font-bold mb-2 mt-8">User Registrations</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">User ID</th>
                            <th className="px-4 py-2">Full Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Registration Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrationData.map((registration) => (
                            <tr key={registration.id}>
                                <td className="border px-4 py-2">{registration.id}</td>
                                <td className="border px-4 py-2">{registration.fullName}</td>
                                <td className="border px-4 py-2">{registration.email}</td>
                                <td className="border px-4 py-2">{registration.registrationTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Uploaded Document Data */}
            <section>
                <h2 className="text-xl font-bold mb-2 mt-8">Uploaded Documents</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Document ID</th>
                            <th className="px-4 py-2">User ID</th>
                            <th className="px-4 py-2">Document Type</th>
                            <th className="px-4 py-2">Upload Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documentData.map((document) => (
                            <tr key={document.id}>
                                <td className="border px-4 py-2">{document.id}</td>
                                <td className="border px-4 py-2">{document.userId}</td>
                                <td className="border px-4 py-2">{document.documentType}</td>
                                <td className="border px-4 py-2">{document.uploadTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default AdminDashboard;
