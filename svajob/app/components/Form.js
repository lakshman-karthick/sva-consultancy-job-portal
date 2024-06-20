import React, { useState,useRef } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assuming Modal component is in the same directory

export default function Form({forwardedRef}) {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    appliedPosition: '',
  });
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const targetRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append('resume', file);

    try {
      const response = await axios.post(
        'https://sva-consultancy-job-portal.onrender.com/api/v1/svajobportal/jobapplication',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      setMessage('File uploaded successfully');
      setFormData({firstname: '',
        lastname: '',
        email: '',
        mobileno: '',
        appliedPosition: ''})
        setFile(null)
    } catch (error) {
      console.error('There was an error uploading the file!', error);
      setMessage('Error uploading file');
    } finally {
      setShowModal(true);
    }
  };

  return (
    <>
    <div ref={forwardedRef} className="flex flex-col md:flex-row justify-center items-center bg-white">
      <div className="w-1/2 overflow-hidden rounded-bl-lg h-[40rem]">
        <img
          src="/img1.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2 h-[40rem]">
        <h1 className="text-3xl font-extrabold italic font-serif mb-5 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
          Job Application
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                value={formData.firstname}
                onChange={handleInputChange}
                id="firstname"
                name="firstname"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastname}
                onChange={handleInputChange}
                id="lastname"
                name="lastname"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.mobileno}
              onChange={handleInputChange}
              id="mobileno"
              name="mobileno"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700"
            >
              Applied Position
            </label>
            <select
              id="appliedPosition"
              value={formData.appliedPosition}
              onChange={handleInputChange}
              name="appliedPosition"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a position</option>
              <option value="Financial Accounting services">
                Financial Accounting services
              </option>
              <option value="Investment Management">Investment Management</option>
              <option value="Information Technology">Information Technology</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              onChange={handleFileChange}
              name="resume"
              accept="application/pdf"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Modal show={showModal} onClose={() => setShowModal(false)} message={message} className="z-50" />
    </>
  );
}
