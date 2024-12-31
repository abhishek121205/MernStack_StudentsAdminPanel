import express, { Router } from "express"
import { addStudent, getCourses, getStudents } from "../controllers/student.controller.js"

const studentRouter = Router()

studentRouter.post("/addStudent", addStudent)
studentRouter.get("/getStudents/:course", getStudents)
studentRouter.get("/getCourses", getCourses)

export default studentRouter 