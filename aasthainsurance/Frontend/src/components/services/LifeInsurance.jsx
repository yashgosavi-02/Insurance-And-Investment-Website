import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function LifeInsurance() {
  const api = "http://localhost:8080";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [policyTerm, setPolicyTerm] = useState([]);
  const [coverageAmount, setCoverageAmount] = useState([]);
  const [medicalTestRequired, setMedicalTestRequired] = useState([]);
  const [smokerStatus, setSmokerStatus] = useState([]);
  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          policyTerm,
          coverageAmount,
          medicalTestRequired,
          smokerStatus,
          gender,
          age,
        }).toString();

        const response = await axios.get(`${api}/insurance/life/filter?${queryParams}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [policyTerm, coverageAmount, medicalTestRequired, smokerStatus, gender]);


const handleGetPolicy = (policy) => {
console.log("Added to cart:", policy);
navigate('/getPolicy', { state: { policy, insuranceType : 'LIFE', fullName : '' } });
};
   

  return (
    <div className="flex p-8">
      {/* Filter Sidebar */}
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select name="gender" className="w-full" onChange={e => setGender(e.target.value)}>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Policy Term (in years)
          </label>
          <select name="policyTerm" className="w-full" onChange={e => setPolicyTerm(e.target.value)}>
            <option value="">All</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Coverage Amount (in lakhs)
          </label>
          <select name="coverageAmount" className="w-full" onChange={e => setCoverageAmount(e.target.value)}>
            <option value="">All</option>
            <option value="5000000">50,00,000</option>
            <option value="7500000">75,00,000</option>
            <option value="10000000">1,00,00,000</option>
            <option value="12500000">1,25,00,000</option>
            <option value="15000000">1,50,00,000</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Medical Test Required
          </label>
          <select name="medicalTestRequired" className="w-full" onChange={e => setMedicalTestRequired(e.target.value)}>
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Smoking Status</label>
          <select name="smokingStatus" className="w-full" onChange={e => setSmokerStatus(e.target.value)}>
            <option value="">All</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
      </div>
      {/* Policies */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {data.map((policy) => (
          <div
            key={policy.id}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-grow">
              <div className="text-gray-900 font-bold text-xl mb-4">{policy.company}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Coverage Amount</span>
                  <div className="text-gray-800">{policy.coverageAmount}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Policy Term</span>
                  <div className="text-gray-800">{policy.policyTerm}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Medical Test</span>
                  <div className="text-gray-800">{policy.medicalTest}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Smoker Status</span>
                  <div className="text-gray-800">{policy.smokerStatus}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Gender</span>
                  <div className="text-gray-800">{policy.gender}</div>
                </div>
              </div>
              <div className="text-sm border p-3 rounded-md bg-gray-50">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-semibold text-gray-700">Financial Security for Dependents</span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700">Peace of Mind and Long-Term Planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center items-center">
              <button
                className=" text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out bg-textC hover:bg-footerC"
                onClick={() => handleGetPolicy(policy)}
              >
                <FaCartArrowDown/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeInsurance;
