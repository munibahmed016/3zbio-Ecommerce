import React from 'react';
import Zahid from "../../assets/zahid-300x300-1.jpg";
import Huma from "../../assets/huma-3-300x300-1.jpg";
import Uzma from '../../assets/uzma-1-300x300-1.jpg';
import Imran from "../../assets/imran-1-300x300-1.jpg";
import Arsalan from "../../assets/arsalan-1-300x300-1.jpg";
import Sheper from "../../assets/shahper-1-300x300-1.jpg";


const teamMembers = [
    {
        name: "Zahid Ali Khan",
        position: "CEO",
        description: "Zahid has 20+ years of diverse experience in leadership roles within the medical diagnostics industry. His vision and strategic direction have been instrumental in establishing 3zBio as a leader in innovative health solutions.",
        image: Zahid,
    },
    {
        name: "Huma Fazal",
        position: "Head of HR, Strategy & Admin",
        description: "Huma leads our HR, strategy, and administration with over a decade of experience in corporate governance. She ensures that our company culture remains strong and that we are always moving forward with a clear vision.",
        image: Huma,
    },
    {
        name: "Uzma Kazmi",
        position: "Head of Marketing, R&D",
        description: "Uzma holds an advanced marketing degree and has spent over 15 years driving brand strategies in the healthcare sector. Her innovative approach to marketing and research ensures our products reach the right audience.",
        image: Uzma,
    },
    {
        name: "Imran Ali Khan",
        position: "Head of Operations - Pakistan",
        description: "Imran has 15+ years of dedicated experience in the operations sector. He ensures the seamless execution of our business strategies across Pakistan, delivering excellence at every step.",
        image: Imran,
    },
    {
        name: "Arsalan Johar",
        position: "Sales & Operations Manager UAE",
        description: "Arsalan brings a wealth of experience in sales and operations, with a focus on the UAE market. His expertise in market penetration and customer relations drives our success in the region.",
        image: Arsalan,
    },
    {
        name: "Syed Shahper",
        position: "Head of IT",
        description: "Syed is a technology enthusiast with over a decade of experience in IT management. His leadership ensures that our technology infrastructure is robust and secure, supporting our operations at every level.",
        image: Sheper,
    },
];


const OurTeam = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen justify-between items-center text-center">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-4">Our Team</h1>
            <p className="text-[#C4A968] text-lg md:text-[26px] mt-7 italic font-bold">
                Driving Innovation in Medical Diagnostics
            </p>
            <p className="text-center text-gray-400 text-xl mb-16 mt-6">
                Meet the Team Behind 3zbio's Cutting-Edge Solutions for Health and Wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
                        <img src={member.image} alt={member.name} className="w-56 h-56 mx-auto rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-500">{member.position}</p>
                        <p className="text-gray-700 mt-6">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
};

export default OurTeam;
