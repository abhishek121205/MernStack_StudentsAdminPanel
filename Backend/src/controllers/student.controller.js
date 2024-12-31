import { student } from "../models/student.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addStudent = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, course } = req.body;
    if ([firstName, lastName, email, course].some((val) => val?.trim() === "")) {
        throw new Error("All fields are required")
    }

    const isStudentExist = await student.findOne({
        $and: [{ email }, { course }]
    })

    if (isStudentExist) throw new Error("Student already exists")

    const studentPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        course: course
    }
    const createdStudent = await student.create(studentPayload)

    return res.status(201).json({
        success: true,
        data: createdStudent,
        message: "Student added successfully"
    })
})

const getStudents = asyncHandler(async (req, res) => {
    const { course } = req.params

    if (!(course === "all")) {
        const allStudents = await student.find({ course })
        return res.status(200).json({
            success: true,
            data: allStudents,
            message: "Students fetched successfully"
        })
    }
    const allStudents = await student.find({})

    return res.status(200).json({
        success: true,
        data: allStudents,
        message: "Students fetched successfully"
    })
})

const getCourses = asyncHandler(async (req, res) => {
    const allCourses = await student.distinct("course")
    return res.status(200).json({
        data: allCourses,
        message: "Courses fetched successfully",
        success: true
    })
})

export { addStudent, getStudents, getCourses }