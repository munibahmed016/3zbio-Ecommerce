import React from 'react';
import Coming from "../../assets/coming-soon2.jpg";

const JointInjection = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-center">
    <div className="flex-1 flex flex-col justify-center mt-6 items-center">
      <img src={Coming} alt="Coming Soon" className="w-72 md:w-[65%] h-auto" />
    </div>
  </div>
  );
}

export default JointInjection
