import React from 'react';
import whole from '../../utils/whole';// Ensure the endowment data is imported correctly

const Whole = () => {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold text-center my-8">Whole Plans</h1>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {whole.map(plan => (
                    <div key={plan.code} className="border border-gray-300 rounded-lg shadow-md p-6 max-w-sm bg-white">
                        <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
                        <p><strong>Code:</strong> {plan.code}</p>
                        <p><strong>UINO:</strong> {plan.uino}</p>
                        <p className="mt-2 mb-4">{plan.description}</p>
                        <div className="details">
                            <p><strong>Minimum Basic Sum Assured:</strong> {plan.details.minimum_basic_sum_assured}</p>
                            <p><strong>Policy Term:</strong> {plan.details.policy_term}</p>
                            <p><strong>Premium Paying Term:</strong> {plan.details.premium_paying_term}</p>
                            <p><strong>Minimum Age at Entry:</strong> {plan.details.minimum_age_at_entry}</p>
                            <p><strong>Maximum Age at Entry:</strong> {plan.details.maximum_age_at_entry}</p>
                            <p><strong>Minimum Age at Maturity:</strong> {plan.details.minimum_age_at_maturity}</p>
                            <p><strong>Maximum Age at Maturity:</strong> {plan.details.maximum_age_at_maturity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Whole;
