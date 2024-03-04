import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import licImage from '../Images/lic.png';
import iciciImage from '../Images/icici.png';
import orientalImage from '../Images/oriental.png';
import tataImage from '../Images/tata.png';
import starImage from '../Images/star.png';
import hdfcImage from '../Images/hdfc.png';

function PartnersCard({imageUrl}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex justify-center items-center">
      <Link className="block">
        <img src={imageUrl} alt={name} className="max-h-48 w-auto mx-auto" />
        {/* Adjust the max height and other styles as needed */}
        {/* <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div> */}
      </Link>
    </div>
  );
}

function Partners() {
  const teamMembers = [
    {
      id: 1,
      // name: 'LIC',
      image: licImage,
      // to: '/Partners/LIC'
    },
    {
      id: 2,
      // name: 'ICICI Lombard',
      image: iciciImage,
      // to: '/Partners/ICICI'
    },
    {
      id: 3,
      // name: 'Oriental Insurance',
      image: orientalImage,
      // to: '/Partners/Oriental'
    },
    {
      id: 4,
      // name: 'TATA AIA Life',
      image: tataImage,
      // to: '/Partners/TATA-AIA'
    },
    {
      id: 5,
      // name: 'Star Health Insurance',
      image: starImage,
      // to: '/Partners/Star-Health'
    },
    {
      id: 6,
      // name: 'HDFC ERGO',
      image: hdfcImage,
      // to: '/Partners/HDFC-ERGO'
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-indigo-600">
          Invest and Grow Rich, No worries in your life.
        </h2>
        {/* <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check out our various partners
        </h1> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <PartnersCard
            key={index}
            // name={member.name}
            imageUrl={member.image}
            // to={member.to}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
