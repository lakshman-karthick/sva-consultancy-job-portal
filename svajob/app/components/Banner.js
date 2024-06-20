import React, { useState } from 'react';
import Image from 'next/image';

function Banner({ onClick }) {
  const [isOpen, setisOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setisOpen(true);
  };

  const handleMouseLeave = () => {
    setisOpen(false);
  };

  return (
    <>
      <div className='bg-slate-100'>
        <div className='m-5 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center'>
            <div className="w-16 sm:w-24 md:w-32">
              <Image
                src="/logo.png"
                width={128}
                height={128}
                alt="Logo"
              />
            </div>
           
          </div>
          
          <div className='flex mt-4 md:mt-0'>
          <div
              onMouseEnter={handleMouseEnter}
              className="ml-4 md:ml-8 relative inline-block text-left"
            >
              <div className="text-black antialiased hover:subpixel-antialiased shadow-md font-sans font-bold cursor-pointer text-xs md:text-xs hover:text-blue-500 hover:bg-blue-200 items-center justify-center p-3 rounded-lg">
                AVAILABLE ROLES
              </div>
              {isOpen && (
                <div
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900" role="menuitem">
                      Financial Accounting services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900" role="menuitem">
                      Investment Management
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900" role="menuitem">
                      Information Technology
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div onClick={onClick} className='text-black antialiased hover:subpixel-antialiased shadow-md font-sans font-bold ml-0 md:ml-8 cursor-pointer text-xs md:text-xs hover:text-blue-500 hover:bg-blue-200 items-center justify-center p-3 rounded-lg'>
              JOB APPLICATION
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[60vh] md:h-screen flex justify-center items-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0">
          <Image
            className="w-full h-full object-cover"
            src="/img4.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
              STALWART CONSULTANCY
            </div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
              SERVICES
            </div>
          </div>
          <div>
            <button onClick={onClick} className="relative text-sm bg-gradient-to-r from-blue-500 to-blue-800 bg-opacity-70 text-white font-bold py-3 px-5 border border-blue-400 rounded-lg hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md">
              <span className="absolute inset-0 bg-opacity-30 bg-blue-600 rounded-lg blur-md"></span>
              <span className="relative">APPLY</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;


