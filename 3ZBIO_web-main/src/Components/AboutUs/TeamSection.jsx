import React from 'react';
import Uzma from '../../assets/uzma-1-300x300-1.jpg';
import Arsalan from "../../assets/arsalan-1-300x300-1.jpg";
import Imran from "../../assets/imran-1-300x300-1.jpg";
import Sheper from "../../assets/shahper-1-300x300-1.jpg";

const TeamMember = ({ image, name, role, description }) => (
  <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start">
    <img src={image} alt={name} className="rounded-full w-24 h-24 mb-4"/>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-600">{role}</p>
    <p className="mt-2 text-sm text-left">{description}</p>
    <div className="mt-4 flex space-x-2">
      <a href="#" className="text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.011.971c0 .538-.396.973-1.036.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"/>
        </svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Uzma Kazmi",
      role: "Head of Marketing, R&D",
      description: "Meet Uzma, a seasoned marketing professional with a zeal for elevating brands...",
      image: Uzma
    },
    {
      name: "Arsalan Jauhar",
      role: "Sales & Operations Manager",
      description: "Arsalan Jauhar is a seasoned sales leader with a proven track record of driving growth and exceeding sales targets...",
      image: Arsalan
    },
    {
      name: "Imran Ali Khan",
      role: "Head of Operations",
      description: "Imran Ali Khan has 30 years of valuable experience in various roles in Admin & Operations...",
      image: Imran
    },
    {
      name: "Syed Shahper",
      role: "Head of IT",
      description: "Shahper is now instrumental in driving 3Z Bio's IT infrastructure initiatives. His focus on Network, e-commerce and VoIP SIP integrations...",
      image: Sheper
    }
  ];

  return (
    <section className="py-16 bg-[#022636] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">The Team</h2>
        <p className="text-xl mb-8">
          Meet the Team Behind 3ZBIO's Cutting-Edge Solutions for Health and Wellness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Meet Our Team!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;