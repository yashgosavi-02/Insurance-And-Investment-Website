import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [retirementAge, setRetirementAge] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(0);
  const [results, setResults] = useState(null);
  const chartRef = useRef(null);

  const calculate = () => {
    // Your retirement calculation logic here
    // For simplicity, let's assume a basic calculation
    const yearsToRetirement = retirementAge - currentAge;
    const totalSavings = monthlySavings * 12 * yearsToRetirement;
    const totalInterest = totalSavings * (Math.pow(1 + annualReturn / 100, yearsToRetirement) - 1);
    const totalAmount = totalSavings + totalInterest;

    // Create Chart
    const labels = Array.from({ length: yearsToRetirement + 1 }, (_, i) => currentAge + i);
    const data = Array.from({ length: yearsToRetirement + 1 }, (_, i) =>
      (monthlySavings * 12) * (i) + (monthlySavings * 12 * (i) * (annualReturn / 100))
    );

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Retirement Savings',
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }]
      },
    });

    setResults({ totalAmount });
  };

  useEffect(() => {
    if (results) {
      calculate();
    }
  }, [results]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Retirement Calculator</h2>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="currentAge">Current Age</label>
        <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} id="currentAge" className="input" />

        <label htmlFor="retirementAge">Retirement Age</label>
        <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} id="retirementAge" className="input" />

        <label htmlFor="monthlySavings">Monthly Savings</label>
        <input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(Number(e.target.value))} id="monthlySavings" className="input" />

        <label htmlFor="annualReturn">Annual Return (%)</label>
        <input type="number" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} id="annualReturn" className="input" />

        <button onClick={calculate}>Calculate</button>
      </div>

      {results && (
        <div>
          <canvas ref={chartRef}></canvas>
        </div>
      )}
    </div>
  );
};

export default RetirementCalculator;
