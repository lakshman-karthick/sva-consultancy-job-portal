"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobApplicationsPage = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/svajobportal/jobApplication');
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching job applications:', error);
            }
        };

        fetchApplications();
    }, [applications]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/svajobportal/jobApplication/${id}`,{
                id: id
            }).then(()=>{
                console.log("Deleted Successfully")
                setApplications(applications.filter(application => application.id !== id));
            })
        } catch (error) {
            console.error('Error deleting application:', error);
        }
    };
    

    return (
        <div className='bg-blue-200 h-screen'>
            <div>
                <h1 className='font-serif italic font-extrabold text-3xl text-center text-blue-700'>STALWART CONSULTANCY SERVICE</h1>
            </div>
            <div className='mt-5'>
                <p className='text-center font-bold text-xl'>JOB APPLICATIONS</p>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white">
                    <thead className="bg-blue-700 text-white">
                        <tr>
                            <th className="w-1/6 py-2">First Name</th>
                            <th className="w-1/6 py-2">Last Name</th>
                            <th className="w-1/6 py-2">Email</th>
                            <th className="w-1/6 py-2">Mobile No</th>
                            <th className="w-1/6 py-2">Resume</th>
                            <th className="w-1/6 py-2">Applied Position</th>
                            <th className="w-1/6 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-blue-300 text-black'>
                        {applications.map((application) => (
                            <tr key={application.id} className="text-center">
                                <td className="border px-4 py-2">{application.firstname}</td>
                                <td className="border px-4 py-2">{application.lastname}</td>
                                <td className="border px-4 py-2">{application.email}</td>
                                <td className="border px-4 py-2">{application.mobileno}</td>
                                <td className="border px-4 py-2">
                                    <a
                                        href={`http://localhost:8000/${application.resume}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="text-blue-800 hover:underline"
                                    >
                                        Download Resume
                                    </a>
                                </td>
                                <td className="border px-4 py-2">{application.appliedPosition}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(application._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobApplicationsPage;
