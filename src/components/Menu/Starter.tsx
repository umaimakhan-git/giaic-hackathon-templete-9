import React from 'react';
import Image from 'next/image';
import StarterImage from "../../../public/Images/StarterMenuImage.png";

const Starter = () => {
  return (
    <div className='max-w-[1320px] mx-auto md:my-[120px] my-20 flex xl:gap-[112px] lg:gap-[60px] items-center md:gap-10 gap-[20px] md:flex-row flex-col px-3 md:px-0 '>
        <div>
            <Image src={StarterImage} alt='' className='md:h-[626px] h-[526px]'></Image>
        </div>
        <div className='flex flex-col gap-6 md:gap-3'>
            <div>
                <p className='text-[#333333] font-helvetica font-bold text-5xl md:text-left text-center leading-[56px]'>Starter Menu</p>
            </div>
            <div className='flex gap-[121px]  xl:w-[760px] lg:w-[650px] justify-between cursor-pointer'>
                <div className='flex flex-col gap-2 font-helvetica text-[#333333]'>
                    <p className='font-bold md:text-2xl text-xl hover:text-primary '>Alder Grilled Chinook Salmon</p>
                    <p className='text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
                    <p className='text-[#4F4F4F]'>560 CAL</p>
                </div>
                <div className=''>
                    <p className='text-primary font-bold md:text-2xl text-xl'>32$</p>
                </div>
            </div>

            <div className='flex gap-[121px] xl:w-[760px] lg:w-[650px] justify-between cursor-pointer'>
                <div className='flex flex-col gap-2 font-helvetica text-[#333333]'>
                    <p className='font-bold md:text-2xl text-xl hover:text-primary'>Berries and creme tart</p>
                    <p className='text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                    <p className='text-[#4F4F4F]'>700 CAL</p>
                </div>
                <div className=''>
                    <p className='text-primary font-bold md:text-2xl text-xl'>43$</p>
                </div>
            </div>

            <div className='flex gap-[121px] xl:w-[760px] lg:w-[650px] justify-between cursor-pointer'>
                <div className='flex flex-col gap-2 font-helvetica text-[#333333]'>
                    <p className='font-bold md:text-2xl text-xl hover:text-primary'>Tormentoso Bush Pizza Pintoage</p>
                    <p className='text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
                    <p className='text-[#4F4F4F]'>1000 CAL</p>
                </div>
                <div className=''>
                    <p className='text-primary font-bold md:text-2xl text-xl'>14$</p>
                </div>
            </div>

            <div className='flex gap-[121px] xl:w-[760px] lg:w-[650px] justify-between cursor-pointer'>
                <div className='flex flex-col gap-2 font-helvetica text-[#333333]'>
                    <p className='font-bold md:text-2xl text-xl first-line:hover:text-primary'>Spicy Vegan Potato Curry</p>
                    <p className='text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
                    <p className='text-[#4F4F4F]'>560 CAL</p>
                </div>
                <div className=''>
                    <p className='text-primary font-bold md:text-2xl text-xl'>35$</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Starter;