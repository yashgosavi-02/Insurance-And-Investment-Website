// Import necessary dependencies
import React from 'react';
import endowment from '../../utils/endowment';

const EndowmentCard = ({ plan }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 transition-transform transform hover:scale-105">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">{plan.name}</div>
          <p className="mt-2 text-gray-600">{plan.description}</p>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Details</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li><strong>Minimum Basic Sum Assured:</strong> {plan.details.minimum_basic_sum_assured}</li>
              <li><strong>Policy Term:</strong> {plan.details.policy_term}</li>
              <li><strong>Premium Paying Term:</strong> {plan.details.premium_paying_term}</li>
              <li><strong>Minimum Age at Entry:</strong> {plan.details.minimum_age_at_entry}</li>
              <li><strong>Maximum Age at Entry:</strong> {plan.details.maximum_age_at_entry}</li>
              <li><strong>Minimum Age at Maturity:</strong> {plan.details.minimum_age_at_maturity}</li>
              <li><strong>Maximum Age at Maturity:</strong> {plan.details.maximum_age_at_maturity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const EndowmentList = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Endowment Plans</h1>
      <div className="space-y-6">
        {endowment.map((plan, index) => (
          <EndowmentCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default EndowmentList;
