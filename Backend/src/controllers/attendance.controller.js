import { attendance } from "../models/attendance.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addAttendance = asyncHandler(async (req, res) => {
    const { course, absent, present } = req.body

    if (!course) throw new Error("Course is required")

    const attendancePayload = {
        course: course,
        present: [...present],
        absent: [...absent]
    }

    const registerAttendance = await attendance.create(attendancePayload)

    return res.status(201).json({
        success: true,
        message: "Attendance registered succcessfully",
        data: registerAttendance
    })
})

const getAttendance = asyncHandler(async (req, res) => {
    const { course } = req.params
    const fullAttendance = await attendance.aggregate([
        {
            $match: {
                course: course
            }
        },
        {
            $lookup: {
                from: "students",
                foreignField: "_id",
                localField: "present",
                as: "present",
                pipeline: [
                    {
                        $project: {
                            firstName: 1,
                            lastName: 1,
                            email: 1,
                            course:1
                        }
                    }
                ]
            }
        },
        {
            $lookup: {
                from: "students",
                foreignField: "_id",
                localField: "absent",
                as: "absent",
                pipeline: [
                    {
                        $project: {
                            firstName: 1,
                            lastName: 1,
                            email: 1,
                            course:1
                        }
                    }
                ]
            }
        },
    ])

    return res.status(200).json({
        success: true,
        message: "Attendance fetched successfully",
        data: fullAttendance
    })
})

export { addAttendance, getAttendance }