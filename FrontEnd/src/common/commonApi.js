const backendUrl = "http://localhost:8050"

export const SummaryApi = {
    //student routers
    addStudent: {
        url: `${backendUrl}/student/addStudent`,
        method: "POST"
    },
    getStudent: {
        url: `${backendUrl}/student/getStudents`,
        method: "GET"
    },
    getStudentCourse: {
        url: `${backendUrl}/student/getCourses`,
        method: "GET"
    },

    // attendance routers
    takeAttendance: {
        url: `${backendUrl}/attendance/addAttendance`,
        method: "POST"
    },
    getAttendance: {
        url: `${backendUrl}/attendance/getAttendance`,
        method: "GET"
    }
}