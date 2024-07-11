import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Dashboard = () => {
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', userID: '6767gssgfksaksdj' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', userID: '6767gssgfksaksdj' },

        // Add more data as needed
    ];

    return (
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div className="py-8">
                <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 className="text-2xl flex gap-3 leading-tight bg-gray-50 text-yellow-600 px-2 rounded-md">Users <span className='bg-slate-50 my-auto'><FaUsers className='bg-gray-50 ' /></span></h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-white border-b border-gray-200 text-yellow-500 text-left text-sm uppercase font-normal"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-white border-b border-gray-200 text-yellow-500 text-left text-sm uppercase font-normal"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-white border-b border-gray-200 text-yellow-500  text-left text-sm uppercase font-normal"
                                    >
                                        User-ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 bg-white border-b border-gray-200 text-yellow-500  text-left text-sm uppercase font-normal"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-black bg-gray-50 whitespace-no-wrap">{item.name}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-black bg-gray-50 whitespace-no-wrap">{item.email}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-black bg-gray-50 whitespace-no-wrap">{item.userID}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button className=" transition-all hover:scale-110 text-center w-full  md:text-xl whitespace-no-wrap"><FaTrash className='bg-slate-50 text-red-500' /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;