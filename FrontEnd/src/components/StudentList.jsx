import React, { useEffect, useState } from 'react';
import AddStudent from './AddStudent';
import { SummaryApi } from '../common/commonApi';
import { toast } from 'react-toastify';

const StudentList = () => {

  const [onClose, setOnClose] = useState(false)
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])
  const [selectCourse, setSelectCourse] = useState("all")

  const fetchAllCourses = async () => {
    const apiData = await fetch(SummaryApi.getStudentCourse.url)
    const response = await apiData.json()
    if (response.success) {
      setCourses(response.data)
    }
    if (response.error) {
      toast.error(response.message)
    }
  }

  const fetchAllStudents = async () => {
    const apiData = await fetch(`${SummaryApi.getStudent.url}/${selectCourse}`)
    const response = await apiData.json()
    if (response.success) {
      setStudents(response.data)
    }
    if (response.error) {
      toast.error(response.message)
    }
  }

  useEffect(() => {
    fetchAllStudents()
    fetchAllCourses()
  }, [selectCourse])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6">
      <div className='flex gap-2 items-center'>
        <span className='font-bold dark:text-white'>Sort By:</span>
        <button onClick={() => setSelectCourse("all")} className='bg-gray-300 dark:bg-gray-600 py-1 px-3 rounded-md text-white font-semibold'>ALL</button>
        {
          courses.map((val, index) => (
            <button key={val + index} onClick={() => setSelectCourse(val)} className='bg-gray-300 dark:bg-gray-600 py-1 px-3 rounded-md text-white font-semibold'>{val.toUpperCase()}</button>
          ))
        }
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold dark:text-white">Students</h2>
        <button onClick={() => setOnClose(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
          Add Student
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">First Name</th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Name</th>
              <th className="hidden sm:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Course</th>
              <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
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
                  <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        onClose && (
          <AddStudent onClose={() => setOnClose(false)} fetchAllStudents={fetchAllStudents} />
        )
      }
    </div>
  );
};

export default StudentList;