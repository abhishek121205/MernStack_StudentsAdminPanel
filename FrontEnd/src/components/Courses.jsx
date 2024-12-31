import React, { useState } from 'react'

const Courses = () => {
    const [selectCourse, setSelectCourse] = useState()
    const [courses, setCourses] = useState([])
    const [openRegister, setOpenRegister] = useState(false)
    return (
        <div className='flex gap-2 items-center'>
            {
                courses.map((val, index) => (
                    <button
                        key={val + index} onClick={() => {
                            setSelectCourse(val)
                            setOpenRegister(true)
                        }}
                        className='bg-gray-800 dark:bg-gray-600 py-1 px-3 rounded-md text-white font-semibold'>
                        {val.toUpperCase()}
                    </button>
                ))
            }
        </div>
    )
}

export default Courses
