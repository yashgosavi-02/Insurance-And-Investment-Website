import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function GetPolicy() {
  const location = useLocation();
  const { policy, insuranceType, fullName } = location.state || {};
  const [cart, setCart] = useState({});
  const [name, setName] = useState(fullName || "");

  useEffect(() => {
    if (policy && insuranceType) {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart };
        if (!updatedCart[insuranceType]) {
          updatedCart[insuranceType] = [];
        }
        updatedCart[insuranceType].push(policy.id);
        return updatedCart;
      });
    }
  }, [policy, insuranceType]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/insurance/cart", cart);
      console.log("Submission successful:", response.data);
    } catch (error) {
      console.error("Error submitting policies:", error);
    }
  };

  if (!policy || !insuranceType) {
    return <div className="text-red-500">No policy selected</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-12 bg-white shadow-lg rounded-lg">
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            readOnly
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Insurance Type</label>
          <input 
            type="text" 
            value={insuranceType} 
            readOnly 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Coverage Amount</label>
          <input 
            type="text" 
            value={policy.coverageAmount} 
            readOnly 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Policy Term (years)</label>
          <input 
            type="text" 
            value={policy.policyTerm} 
            readOnly 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Premium (per month)</label>
          <input 
            type="text" 
            value={policy.premium} 
            readOnly 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-start">
        <button

          type="submit"
          className="bg-gray-500 text-white hover:bg-headerC hover:text-textC font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Buy Policy
        </button>
      </div>
    </form>
  );
}

export default GetPolicy;
