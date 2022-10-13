import express from 'express';

import { getStudent, createStudent, updateStudent } from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudent)
router.post('/', createStudent)
router.patch('/:id', updateStudent)

export default router;