import React from 'react';
import { Link } from 'react-router-dom';

function CalculatorCard({ name, imageUrl, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Link to={to}>
        <img src={imageUrl} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
      </Link>
    </div>
  );
}

function CalculatorSection() {
  const partners = [
    { name: 'SIP', imageUrl: 'https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740', to: '/calculator/sip-calculator' },
    { name: 'Retirement', imageUrl: 'https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740', to: '/calculator/retirement-calculator' },
    { name: 'Other', imageUrl: 'https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740', to: '/calculator/other-calculator' },
  ];

  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4">Try Our Calculators</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <CalculatorCard key={index} name={partner.name} imageUrl={partner.imageUrl} to={partner.to} />
        ))}
      </div>
    </div>
  );
}

export default CalculatorSection;
