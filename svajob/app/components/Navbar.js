import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='w-full bg-blue-500 text-white p-2 text-sm'>
      <div className='flex justify-between items-center'>
        {/* Location */}
        <div className='ml-2 flex items-center'>
          <FontAwesomeIcon className='mr-2' icon={faLocationDot} />
          <span className='text-xs md:text-sm'>Singapore</span>
        </div>
        
        {/* Contact Information (Desktop) */}
        <div className='hidden md:flex items-center'>
          {/* Phone */}
          <div className='mr-4'>
            <FontAwesomeIcon className='mr-2' icon={faPhone} />
            <span className='text-xs md:text-sm'>+65 6293 5695</span>
          </div>
          
          {/* Email */}
          <div>
            <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
            <span className='text-xs md:text-sm max-w-xs truncate'>{dropdownOpen ? 'accounts@svaconsultancy.com' : 'accounts@svaconsultancy.com'}</span>
          </div>
        </div>
        
        {/* Contact Information Dropdown (Mobile) */}
        <div className='md:hidden'>
          <div className="relative">
            <button className="flex items-center text-xs md:text-sm" onClick={toggleDropdown}>
              <span>Contact</span>
              <svg
                className={`w-3 h-3 ml-1 text-white transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-10">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900" role="menuitem">
                    <div className="flex items-center">
                      <FontAwesomeIcon className='mr-2' icon={faPhone} />
                      <span>+65 6293 5695</span>
                    </div>
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900" role="menuitem">
                    <div className="flex items-center">
                      <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
                      <span>accounts@svaconsultancy.com</span>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
