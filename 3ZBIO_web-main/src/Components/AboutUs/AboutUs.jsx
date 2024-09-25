import React from 'react';
import Zahid from "../../assets/zahid-300x300-1.jpg";
import Huma from "../../assets/huma-3-300x300-1.jpg";
import TeamSection from './TeamSection';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-gradient-to-r from-blue-400 to-green-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            “Stbio is an innovative nutraceutical and diagnostics company committed to advancing health through cutting-edge science.
            Focused on developing high-quality, research-driven solutions, Stbio combines expertise in biotech.”
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>
              We’re revolutionizing the healthcare industry by delivering innovative solutions.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p>
              To make and provide world-class organic supplements and systems.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Values</h2>
            <p>
              Innovation, Integrity, Teamwork, Commitment to Customers.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16">
      <div className="bg-white p-6 rounded-lg shadow-lg">
  <img src="peptide-based.jpg" alt="Peptide Based" className="w-24 h-24 mx-auto mb-4"/>
  <h3 className="text-xl font-bold mb-4">Peptide Based</h3>
  <p>World’s #1 Peptide-based Biotechnology.</p>
</div>

{/* Card 2 */}
<div className="bg-white p-6 rounded-lg shadow-lg">
  <img src="easy-to-use.jpg" alt="Easy to use" className="w-24 h-24 mx-auto mb-4"/>
  <h3 className="text-xl font-bold mb-4">Easy to use</h3>
  <p>Simple and practical procedures with precision.</p>
</div>

{/* Card 3 */}
<div className="bg-white p-6 rounded-lg shadow-lg">
  <img src="effective-solutions.jpg" alt="Effective Solutions" className="w-24 h-24 mx-auto mb-4"/>
  <h3 className="text-xl font-bold mb-4">Effective Solutions</h3>
  <p>Accurately helping you maintain health.</p>
</div>

{/* Card 4 */}
<div className="bg-white p-6 rounded-lg shadow-lg">
  <img src="customer-focused.jpg" alt="Customer Focused" className="w-24 h-24 mx-auto mb-4"/>
  <h3 className="text-xl font-bold mb-4">Customer Focused</h3>
  <p>Your health matters, get in touch today.</p>
</div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="flex flex-col items-center">
              <img src={Zahid} alt="Founder" className="rounded-full w-32 h-32 mb-4"/>
              <h3 className="text-xl font-bold">Zahid Ali Khan</h3>
              <p>Founder & CEO</p>
            </div>
            {/* Founder 2 */}
            <div className="flex flex-col items-center">
              <img src={Huma} alt="Founder" className="rounded-full w-32 h-32 mb-4"/>
              <h3 className="text-xl font-bold">Huma Fazal</h3>
              <p>CO-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection/>
    </>
  );
}

export default About;
