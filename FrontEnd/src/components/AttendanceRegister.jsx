import React, { useEffect, useState } from 'react'
import { SummaryApi } from '../common/commonApi'
import { toast } from 'react-toastify'

const AttendanceRegister = ({ onClose, selectedCourse }) => {

    const [students, setStudents] = useState([])
    const [attendanceList, setAttendanceList] = useState({
        course: selectedCourse,
        present: [],
        absent: [],
    })

    const fetchSelectedStudents = async () => {
        const apiData = await fetch(`${SummaryApi.getStudent.url}/${selectedCourse}`)
        const response = await apiData.json()
        if (response.success) {
            setStudents(response.data)

            setAttendanceList((prevList) => ({
                ...prevList,
                present: response.data.map((student) => student._id),
                absent: [],
            }))
        }
        if (response.error) {
            toast.error(response.message)
        }
    }

    useEffect(() => {
        fetchSelectedStudents()
    }, [])

    // Handle switch toggle
    const handleSwitchChange = (studentId, isAbsent) => {
        setAttendanceList((prevList) => {
            const updatedPresent = isAbsent
                ? prevList.present.filter((id) => id !== studentId) // Remove only the toggled student's ID from present
                : prevList.present.includes(studentId)
                    ? prevList.present // If already present, keep it as is
                    : [...prevList.present, studentId]; // Add back to present if toggled off

            const updatedAbsent = isAbsent
                ? [...prevList.absent, studentId] // Add the toggled student's ID to absent
                : prevList.absent.filter((id) => id !== studentId); // Remove it from absent if toggled off

            return {
                ...prevList,
                present: updatedPresent,
                absent: updatedAbsent,
            };
        });
    };

    const handleSubmit = async (e) => {
        const apiData = await fetch(`${SummaryApi.takeAttendance.url}`, {
            method: SummaryApi.takeAttendance.method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(attendanceList)
        })
        const response = await apiData.json()
        if (response.success) {
            toast.success(response.message)
            setAttendanceList({})
            onClose()
        }
        if (response.error) {
            toast.error(response.message)
        }
    }

    return (
        <div>
            <button className='bg-red-500 py-1 px-3 rounded-md mt-3 mb-1 dark:text-white font-semibold' onClick={() => onClose()}>Back</button>
            <table className="min-w-full table-auto">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">First Name</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Name</th>
                        <th className="hidden sm:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Course</th>
                        <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Attendance</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {students.map((student, index) => (
                        <tr key={student.firstName + index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.firstName}</td>
                            <td className="px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.lastName}</td>
                            <td className="hidden sm:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.course}</td>
                            <td className="hidden md:table-cell px-4 lg:px-6 py-4 whitespace-nowrap dark:text-white">{student.email}</td>
                            <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                                {/* add switch here  */}
                                <label className="inline-flex relative items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        defaultChecked={false}
                                        onChange={(e) =>
                                            handleSwitchChange(student._id, e.target.checked)
                                        }
                                    />
                                    <div
                                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"
                                    >
                                    </div>
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSubmit} className='bg-blue-500 py-1 px-3 rounded-md mb-3 mt-1 dark:text-white font-semibold'>Submit</button>
        </div>
    )
}

export default AttendanceRegister
