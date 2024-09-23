import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('contactForm', JSON.stringify(formData));
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="email" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Subject</label>
                        <input type="text" name="subject" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea name="message" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
                        Send Message
                    </button>
                </form>
                {submitted && (
                    <div className="mt-4 p-4 border border-green-500 text-green-500 rounded-lg">
                        Thank you for your message. It has been sent.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
