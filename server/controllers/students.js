import mongoose from "mongoose";
import StudentModel from "../models/studentModel.js";

export const getStudent = async (req, res) => {
  try {
    const studentMessages = await StudentModel.find();

    res.status(200).json(studentMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const createStudent = async (req, res) => {
  const student = req.body

  const newStudent = new StudentModel(student)

  try {
    await newStudent.save();

    res.status(201).json(newStudent)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateStudent = async (req, res) => {
  const { id: _id } = req.params;
  const student = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No student with that id');

  const updatedStudent = await StudentModel.findByIdAndUpdate(_id, student, { new: true });

  res.json(updatedStudent);
}