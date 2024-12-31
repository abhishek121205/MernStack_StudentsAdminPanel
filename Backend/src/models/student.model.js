import mongoose, { Schema } from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const studentSchema = new Schema({
    firstName: {
        required: true,
        type: String,
        // unique: true,
        lowecase: true,
        trim: true,
        index: true
    },
    lastName: {
        required: true,
        type: String,
        // unique: true,
        lowecase: true,
        trim: true,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        index: true,
        unique: true
    },
    course: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})


export const student = mongoose.model("Student", studentSchema);