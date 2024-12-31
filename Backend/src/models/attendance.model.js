import mongoose, { Schema } from "mongoose";

const attendanceSchema = new Schema({
    present: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    absent: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    course: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


export const attendance = mongoose.model("Attendance", attendanceSchema);