import { useSelector } from 'react-redux';

const UserProfile = () => {
  const {currentUser} = useSelector((state) => state.user);
  localStorage.setItem('user', JSON.stringify(currentUser));

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{currentUser.name}</h2>
      <p className="text-gray-600 mb-2">{currentUser.email}</p>
      <p className="text-gray-700 text-center">{currentUser.phone}</p>
    </div>
  );
};

export default UserProfile;
