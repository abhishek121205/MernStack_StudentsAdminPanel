import express, { Router } from "express"
import { addAttendance, getAttendance } from "../controllers/attendance.controller.js"

const attendanceRouter = Router()

attendanceRouter.post("/addAttendance", addAttendance)
attendanceRouter.get("/getAttendance/:course", getAttendance)

export default attendanceRouter 