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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            readOnly
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Insurance Type</label>
          <input 
            type="text" 
            value={insuranceType} 
            readOnly 
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Coverage Amount</label>
          <input 
            type="text" 
            value={policy.coverageAmount} 
            readOnly 
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Policy Term (years)</label>
          <input 
            type="text" 
            value={policy.policyTerm} 
            readOnly 
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Premium (per month)</label>
          <input 
            type="text" 
            value={policy.premium} 
            readOnly 
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex ">
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Buy Policy
        </button>
      </div>
    </form>
  );
  
}

export default GetPolicy;
