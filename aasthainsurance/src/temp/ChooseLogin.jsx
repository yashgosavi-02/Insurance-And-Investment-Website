import { NavLink } from "react-router-dom";

function ChooseLogin() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <img
        src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?t=st=1708691436~exp=1708695036~hmac=a0d53fe2618497b232cdf54302d96ccae0ba0b6265d3056e52fa31aa474003ce&w=740"
        alt=""
        className="w-1/4 mb-8"
      />
      <div className="flex justify-center w-full">
        <NavLink
          to="/login/user"
          activeClassName="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded transition duration-300 ease-in-out"
          className="bg-orange-700 text-white font-bold py-3 px-8 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login As User
        </NavLink>
        <NavLink
          to="/login/admin"
          activeClassName="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded transition duration-300 ease-in-out"
          className="bg-orange-700 text-white font-bold py-3 px-8 rounded ml-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login As Admin
        </NavLink>
      </div>
    </div>
  );
}

export default ChooseLogin;
