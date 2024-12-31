import React from 'react'
import AddAttendance from '../components/AddAttendance'

const Attendance = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Attendance</h2>
            <AddAttendance/>
        </div>
    )
}

export default Attendance
