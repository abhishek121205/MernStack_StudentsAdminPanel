import React from 'react'
import AttendanceLog from '../components/AttendanceLog'

const AttendanceSheet = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Attendance Log</h2>
            <AttendanceLog/>
        </div>
    )
}

export default AttendanceSheet
