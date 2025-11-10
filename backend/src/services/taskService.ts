import { TaskRepository } from '../repositories/taskRepository';
import { Task } from '../models/task';

export class TaskService {
  // Business logic only, depends on repository
  constructor(private repo = new TaskRepository()) {}

  async setup() {
    await this.repo.init();
  }

  async listTasks(): Promise<Task[]> {
    return await this.repo.all();
  }

  async createTask(payload: { title: string; description?: string }): Promise<Task> {
    // Validate input (simple)
    if (!payload.title || payload.title.trim().length === 0) {
      throw new Error('Title is required');
    }
    const task: Task = {
      title: payload.title.trim(),
      description: payload.description?.trim(),
      state: 'pending'
    };
    return await this.repo.create(task);
  }

  async updateTaskState(id: number, state: string): Promise<Task | null> {
    const allowed = ['pending', 'in_progress', 'completed'];
    if (!allowed.includes(state)) throw new Error('Invalid state');
    return await this.repo.updateState(id, state);
  }
}
