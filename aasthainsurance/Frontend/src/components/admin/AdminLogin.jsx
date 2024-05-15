import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://your-backend-url/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        navigate('/admin/dashboard'); // Redirect to dashboard if login successful
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error authenticating:', error);
      alert('An error occurred while authenticating. Please try again later.');
    }
  };

  const handleAgentRegistration = () => {
    navigate('/admin/agent-registration');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="w-full max-w-xs px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full max-w-xs px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAgentRegistration}
      >
        Agent Registration
      </button>
    </div>
  );
}

export default AdminLogin;
