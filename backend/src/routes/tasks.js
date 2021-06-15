import { Router } from 'express'
import {
  deleteTask,
  getTasks,
  saveTask,
  getTask,
  updateTask,
  getTasksCount,
} from "../controllers/tasks";


const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/count', getTasksCount);

router.get('/tasks/:id', getTask);

router.post('/tasks', saveTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

export default Router

