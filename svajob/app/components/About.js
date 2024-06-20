import React from 'react';
import { AcademicCapIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/outline';

export default function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        {/* Content Section */}
        <div className="flex flex-col bg-white custom-border-radius p-4 md:p-8 w-full md:w-1/2 h-auto md:h-[30rem] overflow-y-auto mb-4 md:mb-0">
          <h1 className="text-4xl font-extrabold italic font-serif mb-5 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">About Us</h1>

          <div className="flex items-center mb-4">
            <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-3" />
            <p className="text-gray-700 text-[0.9rem]">
              We provide customized services with professional manner in areas of financial management to a wide range of businesses in Singapore Since 2005. We work with all sizes of companies from medium sized enterprises to subsidiaries of foreign & local multinational corporations.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <ChartBarIcon className="h-6 w-6 text-blue-500 mr-3" />
            <p className="text-gray-700 text-[0.9rem]">
              Over the years, we assembled a team of professionals with experience in financial consulting and management consulting services. We provide regular trainings to our team with the latest developments in their field. We have equipped our team to respond realistically to meet the complex requirements.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-3" />
            <p className="text-gray-700 text-[0.9rem]">
              We work tirelessly to ensure that our clients understand their financial position and compliance. Our team of professionals is dedicated to the highest ethical and professional standards. We have a record of accomplishment in serving organizations of varying sizes and organizational structures.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-bl-lg h-[20rem] md:h-[30rem]">
          <img 
            src="/img2.jpg" 
            alt="About Us" 
            className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-8 md:mt-20 mb-8 md:mb-20 space-y-4 md:space-y-0 md:space-x-4">
      {/* Card for OUR MOTTO */}
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-auto md:h-[11rem]">
        <div className='flex items-center justify-center'>
          <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-3 mb-3" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800 text-center">OUR MOTTO</h2>
        </div>
        <div className="flex items-center mt-1">
          <p className="text-gray-700 text-[0.9rem] text-center">
            Reliable accounting services to business clients.
          </p>
        </div>
      </div>

      {/* Card for OUR MISSION */}
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-auto md:h-[11rem]">
        <div className='flex items-center justify-center'>
          <ChartBarIcon className="h-6 w-6 text-blue-500 mr-3 mb-3" />
          <h2 className="font-bold mb-3 text-2xl text-gray-800 text-center">OUR MISSION</h2>
        </div>
        <div className="flex items-center mt-1">
          <p className="text-gray-700 text-[0.9rem] text-center">
            SVA is dedicated to providing trustable services and committed to responding to your business needs.
          </p>
        </div>
      </div>

      {/* Card for OUR VISION */}
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-auto md:h-[11rem]">
        <div className='flex items-center justify-center'>
          <GlobeAltIcon className="h-6 w-6 text-blue-500 mr-3 mb-3" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800 text-center">OUR VISION</h2>
        </div>
        <div className="flex items-center mt-1">
          <p className="text-gray-700 text-[0.9rem] text-center">
            We strive to be the preferred team in Singapore delivering high-quality services.
          </p>
        </div>
      </div>
    </div>
      
    </>
  );
}
