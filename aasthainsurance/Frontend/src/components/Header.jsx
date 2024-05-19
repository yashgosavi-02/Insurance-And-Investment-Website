import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {currentUser} = useSelector((state) => state.user);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-headerC p-4 h-1/5">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </Link>
          <h2 className="text-textC text-3xl font-bold">
            Aastha Insurance
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-textC" onClick={closeDropdown}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-textC" onClick={closeDropdown}>About</Link>
            </li>
            <li className="relative">
              <button className="text-textC" onClick={toggleDropdown}>Services</button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-headerC p-2 z-10"> 
                  <li>
                    <Link to="services/insurance" className="text-textC" onClick={closeDropdown}>Insurance</Link>
                  </li>
                  <li>
                    <Link to="services/investment" className="text-textC" onClick={closeDropdown}>Investment</Link>
                  </li>
                  <li>
                    <Link to="services/calculators" className="text-textC" onClick={closeDropdown}>Calculators</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="text-textC" onClick={closeDropdown}>Contact</Link>
            </li>
          </ul>
          <Link to="/login" className="text-textC text-xl">
            {currentUser ? <div className="rounded-full overflow-hidden w-20 h-20">
    <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="user" class="w-full h-full object-cover" />
</div>
: <BiSolidLogIn />  }
          </Link>
        </div>
      </nav>
    </header>
  );
}
