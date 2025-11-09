import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';

const service = new TaskService();

export async function initController() {
  await service.setup();
}

export async function listTasks(req: Request, res: Response) {
  try {
    const tasks = await service.listTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    // Placeholder for auth: req.user ...
    const payload = req.body;
    const task = await service.createTask(payload);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: String(err) });
  }
}

export async function updateTaskState(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { state } = req.body;
    const updated = await service.updateTaskState(id, state);
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: String(err) });
  }
}
