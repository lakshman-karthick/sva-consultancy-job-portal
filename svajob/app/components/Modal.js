import React from 'react';

export default function Modal({ show, onClose, message }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        {/* <h2 className="text-xl mb-4">Notification</h2> */}
        <h2 className=' text-center font-extrabold font-serif italic text-xl'>{message}</h2>
        <div className='flex justify-center items-center'>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
}
