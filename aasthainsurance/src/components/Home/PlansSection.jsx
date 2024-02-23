import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function PlansCard({ name, imageUrl, role, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Link to={to}>
        <img src={imageUrl} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-base text-gray-400 font-normal">{role}</p>
        </div>
      </Link>
    </div>
  );
}

function PlansSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Endownment Plan',
      role: 'Click to know more',
      image: 'https://img.freepik.com/free-photo/finances-elements-wooden-cubes-arrangement_23-2148793814.jpg?t=st=1708696880~exp=1708700480~hmac=12b42b44949456892b9f9334215a4889581dd88a12f096e53e156d86ef13ca04&w=996',
      to: '/plans/endownment-plan'
    },
    {
      id: 2,
      name: 'Children Protection Plan',
      role: 'Click to know more',
      image: 'https://img.freepik.com/premium-vector/children-health-protection-insurance-concept-landing-page-care-help-online-service_341509-5180.jpg?w=826',
      to: '/team/lucy-carter'
    },
    {
      id: 3,
      name: 'Plan A',
      role: 'Click to know more',
      image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
      to: '/plans/plana'
    },
    {
        id: 4,
        name: 'Plan B',
        role: 'Click to know more',
        image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
        to: '/plans/planb'
      },
      {
        id: 5,
        name: 'Plan C',
        role: 'Click to know more',
        image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
        to: '/plans/planc'
      },
      {
        id: 6,
        name: 'Plan D',
        role: 'Click to know more',
        image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
        to: '/plans/pland'
      },   
      {
        id: 7,
        name: 'Plan E',
        role: 'Click to know more',
        image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
        to: '/plans/plane'
      }, 
      {
        id: 8,
        name: 'Plan F',
        role: 'Click to know more',
        image: 'https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1708697028~exp=1708700628~hmac=6566c3ad895a152ee047c0bd0f5172522c0bc38d0b3cf86aaac4be364b8e1d8d&w=826',
        to: '/plans/planf'
      },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
          Invest and Grow Rich, No worries in your life.
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check out our various investment plans
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <PlansCard
            key={index}
            name={member.name}
            imageUrl={member.image}
            role={member.role}
            to={member.to}
          />
        ))}
      </div>
    </section>
  );
}

export default PlansSection;
