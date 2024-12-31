import React from 'react'

const AttendanceList = ({ onClose, studentList }) => {
    return (
        <div>
            <div className='present mt-3 bg-gray-200 dark:bg-gray-600 p-2 rounded-md shadow-md'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='text-green-500 font-semibold text-xl'>Present students table</h1>
                    <button onClick={() => onClose()} className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md'>Close</button>
                </div>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">First Name</th>
                            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Name</th>
                            <th className="hidden sm:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Course</th>
                            <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {studentList.present.map((student, index) => (
                            <tr key={student.firstName + index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.firstName}</td>
                                <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.lastName}</td>
                                <td className="hidden sm:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.course}</td>
                                <td className="hidden md:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='absent mt-3 bg-gray-200 dark:bg-gray-600 p-2 rounded-md shadow-md'>
                <h1 className='text-red-600 font-semibold text-xl'>Absent students table</h1>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">First Name</th>
                            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Name</th>
                            <th className="hidden sm:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Course</th>
                            <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {studentList.absent.map((student, index) => (
                            <tr key={student.firstName + index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.firstName}</td>
                                <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.lastName}</td>
                                <td className="hidden sm:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.course}</td>
                                <td className="hidden md:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AttendanceList
