import { Button, TextInput } from 'flowbite-react';

const HealthForm = () => {

  return (
    <form action="">
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
        <label className="block mb-2 font-semibold">Eligible Age</label>
        <TextInput
          type="number"
          name="age"
          className="w-full border-gray-300 rounded-md"
          placeholder="Enter Age"
          min="18"
          max="60"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Gender</label>
        <select name="gender" className="w-full border-gray-300 rounded-md">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Policy Term (in years)</label>
        <select name="policyTerm" className="w-full border-gray-300 rounded-md" >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Coverage Amount (in lakhs)</label>
        <select name="coverageAmount" className="w-full border-gray-300 rounded-md" >
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
        <label className="block mb-2 font-semibold">Do you have any chronic disease?</label>
        <select name="chronicDisease" className="w-full border-gray-300 rounded-md">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
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
    </form>
  );
};

export default HealthForm;