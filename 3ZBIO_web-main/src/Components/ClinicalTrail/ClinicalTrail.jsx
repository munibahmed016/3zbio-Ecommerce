import React, { useState } from 'react';
import Banner from "../../assets/banner.jpg";
import Circle from "../../assets/glass_circle.png";
import prog from "../../assets/1_prog.png";

const ClinicalTrail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-blue-50 flex flex-col items-center py-10 px-4 md:px-20">
            {/* Banner Section */}
            <header className="text-center mb-10">
                <img src={Banner} alt="ProGsterol Banner" className="w-full max-w-5xl mx-auto" />
            </header>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-5xl">
                {/* Content Section */}
                <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0 mt-6 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">
                        ProGsterol - Reverse Insulin Resistance
                    </h2>
                    <p className="text-gray-700 mb-6">
                        ProGsterol's main ingredient Deglusterol is the world's first new dietary Ingredient (NDI) as a synthetic peptide approved by U.S FDA. It increases the sensitivity of insulin receptors and affects cells with insulin resistance. If you want to learn more about ProGsterol, please click the button below.
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                    >
                        View Clinical Trial PDF
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center lg:w-1/2 text-center gap-4">
                    <img src={Circle} alt="Progsterol Product" className="w-56 lg:w-64" />
                    <h2 className="text-lg font-semibold text-blue-800">Just 1 stick a day!</h2>
                    <p className="text-gray-700">For Healthy Glucose Level with ProGsterol</p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-2/3 max-w-3xl animate__animated animate__fadeIn">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Clinical Trial PDF</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-600 font-bold text-2xl hover:text-gray-800"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <embed
                                src="/Progsterol.pdf"
                                type="application/pdf"
                                width="100%"
                                height="600px"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClinicalTrail;
