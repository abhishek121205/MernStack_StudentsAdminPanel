import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { SummaryApi } from '../common/commonApi';
import { toast } from 'react-toastify';


const AddStudent = ({ onClose,fetchAllStudents }) => {

    const courses = ["fullstack", "frontend", "backend", "ui&ux"]
    const [student, setStudent] = useState({})

    const handleOnChange = (e) => {
        let { name, value } = e.target
        setStudent({ ...student, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const apiData = await fetch(SummaryApi.addStudent.url, {
            method: SummaryApi.addStudent.method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(student)
        })

        const response = await apiData.json()
        if (response.success) {
            toast.success(response.message)
            fetchAllStudents()
            setStudent({})
        }
        if (response.error) {
            toast.error(response.message);
        }
    }

    return (
        <div className='flex fixed w-full h-full bg-opacity-50 bg-slate-300 top-0 z-50 bottom-0 left-0 right-0 justify-center items-center'>
            <div className='bg-white dark:bg-gray-700 w-full max-w-xl h-full max-h-[72%] overflow-y-scroll scrollbar-none px-5 py-4 rounded-md'>
                <div className='flex justify-between items-center pb-3'>
                    <h1 className='font-bold dark:text-white' style={{ fontSize: "20px" }}>Add Student</h1>
                    <div
                        className="w-fit text-2xl hover:text-red-600 cursor-pointer dark:text-white"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </div>
                </div>
                <form className='grid gap-2' onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className='dark:text-white font-semibold'>Firstname:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={student.firstName || ""}
                        onChange={handleOnChange}
                        className='p-2 border rounded-md dark:bg-gray-700 dark:border-white-600 dark:text-white'
                    />

                    <label htmlFor="lastName" className='dark:text-white font-semibold'>Lastname:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={student.lastName || ""}
                        onChange={handleOnChange}
                        className='p-2 border rounded-md dark:bg-gray-700 dark:border-white-600 dark:text-white'
                    />

                    <label htmlFor="email" className='dark:text-white font-semibold'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={student.email || ""}
                        onChange={handleOnChange}
                        className='p-2 border rounded-md dark:bg-gray-700 dark:border-white-600 dark:text-white'
                    />

                    <label htmlFor="course" className='dark:text-white font-semibold'>Course:</label>
                    <select name="course"
                        id="course"
                        onChange={handleOnChange}
                        value={student.course || ""}
                        className='p-2 border rounded-md dark:bg-gray-700 dark:border-white-600 dark:text-white'
                    >
                        <option value="">--Select Course--</option>
                        {
                            courses.map((val, index) => (
                                <option key={val + index} value={val}>{val}</option>
                            ))
                        }
                    </select>

                    <button className='bg-blue-500 text-white py-3 rounded-md'>Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudent
