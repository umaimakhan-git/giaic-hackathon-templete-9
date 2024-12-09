import React from 'react';
import Link from 'next/link';
import { RxCaretRight } from "react-icons/rx";

const NotFound = () => {
  return (
    <div>

        <section className='w-full bg-[url("/Images/HeaderImage.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
          404 Error
        </h1>
        <div className='text-base sm:text-lg md:text-xl flex items-center text-center justify-center'>
          <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
            Home
          </Link>
          <span className='text-white'>
          <RxCaretRight />
          </span>
          <Link href="/menu" className='text-[#FF9F0D]'>
            404
          </Link>
        </div>
      </div>
    </div>
  </section>

    <div className="min-h-screen bg-white">
      
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          
          <p className="text-[18px] mb-4">
            Page cannot be found!
          </p>
          
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go to Home
            </button>
          </Link>
        </div>
      </section>
    </div></div>
  );
};

export default NotFound;