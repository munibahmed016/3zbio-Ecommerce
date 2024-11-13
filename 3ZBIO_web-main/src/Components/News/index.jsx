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
                </div>
            </div>
        </div>
    );
}

export default News;
