import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import studentRouter from "./routers/student.router.js"
import attendanceRouter from "./routers/attendance.router.js"

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PATCH, DELETE "
}))
app.use(express.json())
app.use(express.urlencoded({ limit: "12kb" }))
app.use("/student", studentRouter)
app.use("/attendance", attendanceRouter)

export { app }