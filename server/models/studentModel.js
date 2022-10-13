import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  studentID: String,
  fullName: String,
  class: String,
  address: String
})

const StudentModel = mongoose.model('SudentModel', studentSchema)

export default StudentModel;