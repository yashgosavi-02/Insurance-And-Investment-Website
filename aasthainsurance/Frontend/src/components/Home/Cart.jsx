import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ selectedPolicy }) => {
  console.log(selectedPolicy);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {selectedPolicy && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Selected Policy</h3>
          <p><strong>ID:</strong> {selectedPolicy.id}</p>
          <p><strong>Name:</strong> {selectedPolicy.name}</p>
          <p><strong>Company:</strong> {selectedPolicy.company}</p>
          <p><strong>Policy Term:</strong> {selectedPolicy.policyTerm} years</p>
          <p><strong>Coverage Amount:</strong> {selectedPolicy.coverageAmount} lakhs</p>
          <p><strong>Medical Test Required:</strong> {selectedPolicy.medicalTestRequired}</p>
          <p><strong>Smoking Status:</strong> {selectedPolicy.smokingStatus}</p>
          <Link to="/life" className="text-blue-500 hover:underline mt-4">Back to Policies</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
