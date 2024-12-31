import React, { useEffect, useState } from 'react'
import { SummaryApi } from '../common/commonApi'
import moment from "moment"
import AttendanceList from './AttendanceList'

const AttendanceLog = () => {

    const [selectCourse, setSelectCourse] = useState("backend")
    const [courses, setCourses] = useState([])
    const [openAttendanceList, setOpenAttendanceList] = useState(false)
    const [attendanceList, setAttendanceList] = useState([])
    const [studentList, setStudentList] = useState({})

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


    const fetchAttendance = async () => {
        const apiData = await fetch(`${SummaryApi.getAttendance.url}/${selectCourse}`)
        const response = await apiData.json()
        if (response.success) {
            setAttendanceList(response.data)
        }
        if (response.error) {
            toast.error(response.message)
        }
    }

    useEffect(() => {
        fetchAllCourses()
        fetchAttendance()
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
                                setOpenAttendanceList(false)
                            }}
                            className='bg-gray-800 hover:bg-gray-600 dark:bg-gray-600 hover:dark:bg-gray-700 py-1 px-3 rounded-md text-white font-semibold'>
                            {val.toUpperCase()}
                        </button>
                    ))
                }
            </div>
            {
                selectCourse && (
                    <div className='grid grid-cols-3 mt-3 gap-2 w-full'>
                        {
                            attendanceList.map((val) => (
                                <div key={val.course + val._id} onClick={() => {
                                    setOpenAttendanceList(true)
                                    setStudentList(val)
                                }} className='bg-gray-200 hover:bg-gray-300 shadow-sm dark:bg-gray-600 hover:dark:bg-gray-700 py-1 px-3 rounded-md'>
                                    <h1 className='font-bold dark:text-white'>Date: <span className='font-semibold dark:text-white'>{moment(val.createdAt).format('LL')}</span></h1>
                                    <h1 className='font-bold dark:text-white'>Time: <span className='font-semibold dark:text-white'>{moment(val.createdAt).format('h:mm:ss a')}</span></h1>
                                    <h1 className='font-bold dark:text-white'>Course: <span className='font-semibold dark:text-white'>{val.course.toUpperCase()}</span></h1>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                openAttendanceList && (
                    <AttendanceList onClose={() => setOpenAttendanceList(false)} studentList={studentList} />
                )
            }
        </div>
    )
}

export default AttendanceLog
