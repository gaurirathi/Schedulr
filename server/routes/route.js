import express, { Router } from 'express';
import { addTask, getTasks ,getTask, editTask,deleteTask} from '../controller/user-controller.js';


const router =express.Router();

router.post('/add',addTask);
router.get('/all',getTasks); 
router.get('/:id',getTask);
router.put('/:id',editTask);
router.delete('/:id',deleteTask)
export default router;