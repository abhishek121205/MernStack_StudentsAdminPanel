import React, { useEffect, useState } from 'react'
import { SummaryApi } from '../common/commonApi'
import AttendanceRegister from './AttendanceRegister'

const AddAttendance = () => {

  const [selectCourse, setSelectCourse] = useState()
  const [courses, setCourses] = useState([])
  const [openRegister, setOpenRegister] = useState(false)

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

  useEffect(() => {
    fetchAllCourses()
  }, [selectCourse])
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6'>
      <h3 className='pb-4 font-bold text-xl dark:text-white'>Select Course:</h3>
      <div className='flex gap-2 items-center'>
        {
          courses.map((val, index) => (
            <button
              key={val + index} onClick={() => {
                setSelectCourse(val)
                setOpenRegister(true)
              }}
              className='bg-gray-800 hover:bg-gray-600 dark:bg-gray-600 hover:dark:bg-gray-700 py-1 px-3 rounded-md text-white font-semibold'>
              {val.toUpperCase()}
            </button>
          ))
        }
      </div>
      {
        openRegister && (
          <AttendanceRegister onClose={() => setOpenRegister(false)} selectedCourse={selectCourse} />
        )
      }
    </div>
  )
}

export default AddAttendance
