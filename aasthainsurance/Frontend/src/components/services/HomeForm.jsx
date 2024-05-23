import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

const HomeForm = () => {
  const [houseAge, setHouseAge] = useState('');
  const [gender, setGender] = useState('');
  const [policyTerm, setPolicyTerm] = useState('');
  const [houseValue, setHouseValue] = useState('');
  const [householdItemsValue, setHouseholdItemsValue] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Company</label>
        <TextInput
          type="text"
          name="company"
          className="w-full border-gray-300 rounded-md"
          placeholder="Enter Policy Name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">House Age</label>
        <TextInput
          type="number"
          name="houseAge"
          className="w-full border-gray-300 rounded-md"
          placeholder="Enter House Age"
          min="18"
          max="60"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Policy Term (in years)</label>
        <select name="policyTerm" className="w-full border-gray-300 rounded-md">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">House Value</label>
        <select name="houseValue" className="w-full border-gray-300 rounded-md">
            <option value={3000000}>30,00,000</option>
            <option value={4000000}>40,00,000</option>
            <option value={5000000}>50,00,000</option>
            <option value={6000000}>60,00,000</option>
            <option value={7000000}>70,00,000</option>
            <option value={8000000}>80,00,000</option>
            <option value={9000000}>90,00,000</option>
            <option value={10000000}>1,00,00,000</option>
            <option value={11000000}>1,10,00,000</option>
            <option value={12000000}>1,20,00,000</option>
            <option value={13000000}>1,30,00,000</option>
            <option value={14000000}>1,40,00,000</option>
            <option value={15000000}>1,50,00,000</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Household Items Value</label>
        <select name="householdItemsValue" className="w-full border-gray-300 rounded-md" >
            <option value={300000}>3,00,000</option>
            <option value={400000}>4,00,000</option>
            <option value={500000}>5,00,000</option>
            <option value={600000}>6,00,000</option>
            <option value={700000}>7,00,000</option>
            <option value={800000}>8,00,000</option>
            <option value={900000}>9,00,000</option>
            <option value={1000000}>10,00,000</option>
            <option value={1100000}>11,00,000</option>
            <option value={1200000}>12,00,000</option>
            <option value={1300000}>13,00,000</option>
            <option value={1400000}>14,00,000</option>
            <option value={1500000}>15,00,000</option>
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
        />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Add
      </Button>
    </div>
  );
};

export default HomeForm;