import React from 'react';
import Lottie from 'lottie-react';
import SuccessAnimation from '../assets/Success.json';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='bg-white w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-1'>
      <Lottie 
        animationData={SuccessAnimation} 
        loop={true} 
        style={{ width: 350, height: 350 }} 
      />
      <p className='text-[#30C3C0] font-bold text-xl'>Payment successfully</p>
      <Link to={"/order"} className='p-2 px-3 border-2 border-[#30C3C0] rounded-full font-semibold text-[#30C3C0] hover:bg-[#022636] hover:border-[#022636] hover:text-white'>See Order</Link>
    </div>
  );
};

export default Success;
