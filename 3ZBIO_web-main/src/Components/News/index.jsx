import React, { useState } from 'react';

const News = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen justify-between items-center text-center bg-gray-50">
            <div className="bg-white py-16 mt-4 shadow-lg rounded-xl">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple Post with Meta Info</h1>
                    <div className="flex justify-center items-center mb-4">
                        <span className="block w-8 h-1 bg-blue-500 mr-2"></span>
                        <span className="block w-2 h-1 bg-blue-500"></span>
                        <span className="block w-4 h-1 bg-blue-500 ml-2"></span>
                    </div>
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        The simplicity brings elegance. Show the feature image, date, and the title to grab the attention of your website visitors.
                    </p>

                    {/* Button to open the modal */}
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                    >
                        View Clinical Trial PDF
                    </button>
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
}

export default News;
