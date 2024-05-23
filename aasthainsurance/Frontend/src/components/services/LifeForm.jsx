import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

const LifeForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    age: '',
    gender: 'Male',
    policyTerm: '10',
    coverageAmount: '5000000',
    medicalTest: 'yes',
    smokerStatus: 'YES',
    premium: '',
  });

  const api = "http://localhost:8080";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/api/insurance/life/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Company</label>
          <TextInput
            type="text"
            name="company"
            className="w-full border-gray-300 rounded-md"
            placeholder="Enter Policy Name"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Eligible Age</label>
          <TextInput
            type="number"
            name="age"
            className="w-full border-gray-300 rounded-md"
            placeholder="Enter Age"
            min="18"
            max="60"
            required
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Gender</label>
          <select
            name="gender"
            className="w-full border-gray-300 rounded-md"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Policy Term (in years)</label>
          <select
            name="policyTerm"
            className="w-full border-gray-300 rounded-md"
            value={formData.policyTerm}
            onChange={handleChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Coverage Amount (in lakhs)</label>
          <select
            name="coverageAmount"
            className="w-full border-gray-300 rounded-md"
            value={formData.coverageAmount}
            onChange={handleChange}
          >
            <option value="5000000">50,00,000</option>
            <option value="7500000">75,00,000</option>
            <option value="10000000">1,00,00,000</option>
            <option value="12500000">1,25,00,000</option>
            <option value="15000000">1,50,00,000</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Medical Test Required</label>
          <select
            name="medicalTest"
            className="w-full border-gray-300 rounded-md"
            value={formData.medicalTest}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Smoking Status</label>
          <select
            name="smokerStatus"
            className="w-full border-gray-300 rounded-md"
            value={formData.smokerStatus}
            onChange={handleChange}
          >
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Premium</label>
          <TextInput
            type="number"
            name="premium"
            className="w-full border-gray-300 rounded-md"
            placeholder="Enter Premium"
            required
            value={formData.premium}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default LifeForm;
