import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardsData from '../../utils/lifeData.js';
import Cart from '../Home/Cart.jsx';

function Life() {
  const navigate = useNavigate();
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [filter, setFilter] = useState({
    policyTerm: '',
    coverageAmount: '',
    medicalTestRequired: '',
    smokingStatus: ''
  });
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  };

  const handleViewClick = () => {
    const newData = cardsData.filter(card => {
      return (
        (filter.policyTerm === '' || (card.policyTerm >= parseInt(filter.policyTerm.split('-')[0]) && card.policyTerm <= parseInt(filter.policyTerm.split('-')[1]))) &&
        (filter.coverageAmount === '' || (card.coverageAmount >= parseInt(filter.coverageAmount.split('-')[0]) && card.coverageAmount <= parseInt(filter.coverageAmount.split('-')[1]))) &&
        (filter.medicalTestRequired === '' || card.medicalTestRequired === filter.medicalTestRequired) &&
        (filter.smokingStatus === '' || card.smokingStatus === filter.smokingStatus)
      );
    });
    setFilteredData(newData);
  };

  const handleGetQuote = (policy) => {
    console.log('Selected Policy:', policy);
    setSelectedPolicy(policy);
    console.log('Selected Policy After Set:', selectedPolicy);
    navigate('/cart');
  };
  return (
    <div className="flex p-8">
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Policy Term (in years)</label>
          <select name="policyTerm" value={filter.policyTerm} onChange={handleFilterChange} className="w-full">
            <option value="">All</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="<40">Greater than 40</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Coverage Amount (in lakhs)</label>
          <select name="coverageAmount" value={filter.coverageAmount} onChange={handleFilterChange} className="w-full">
            <option value="">All</option>
            <option value="50-75">50-75</option>
            <option value="75-100">75-100</option>
            <option value="100-125">100-125</option>
            <option value="125-150">125-150</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Medical Test Required</label>
          <select name="medicalTestRequired" value={filter.medicalTestRequired} onChange={handleFilterChange} className="w-full">
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Smoking Status</label>
          <select name="smokingStatus" value={filter.smokingStatus} onChange={handleFilterChange} className="w-full">
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewClick}
          >
            View Policies
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full">
        {filteredData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full flex">
            <div className="w-1/2 p-4">
              <p>{card.id}</p>
              <img className="w-full h-auto" src={card.image} alt={card.name} />
              <h2 className="text-xl font-semibold">{card.name}</h2>
              <p className="text-gray-600">{card.company}</p>
              <p><strong>Policy Term:</strong> {card.policyTerm} years</p>
              <p><strong>Coverage Amount:</strong> {card.coverageAmount} lakhs</p>
              <p><strong>Medical Test Required:</strong> {card.medicalTestRequired}</p>
              <p><strong>Smoking Status:</strong> {card.smokingStatus}</p>
            </div>
            <div className="w-1/2 p-4">
              <h3 className="text-xl font-semibold">Benefits</h3>
              <ul>
                {card.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                onClick={() => handleGetQuote(card)}
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Render the Cart component and pass selectedPolicy */}
      {selectedPolicy && <Cart selectedPolicy={selectedPolicy} />}
    </div>
  );
}

export default Life;

