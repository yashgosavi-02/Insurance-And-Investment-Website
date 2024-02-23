import React, { useEffect, useState } from 'react';

const stats = [
  { id: 1, name: 'Insured Families', value: '10000+' },
  { id: 2, name: 'Total Claims', value: '2000+' },
  { id: 3, name: 'Policies Sold', value: '30000+' },
];

function Stats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, animatedValue: 0 })));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedStats(prevStats =>
        prevStats.map(stat => {
          const targetValue = parseInt(stat.value.replace(/\D+/g, '')); // Extract numeric value from string
          const step = Math.ceil(targetValue / 100); // Divide target value into 100 steps
          const newValue = Math.min(stat.animatedValue + step, targetValue); // Increment by step, but ensure we don't exceed target
          return { ...stat, animatedValue: newValue };
        })
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {animatedStats.map(stat => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.animatedValue.toLocaleString()}+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Stats;
