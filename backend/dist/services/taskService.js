"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const taskRepository_1 = require("../repositories/taskRepository");
class TaskService {
    // Business logic only, depends on repository
    constructor(repo = new taskRepository_1.TaskRepository()) {
        this.repo = repo;
    }
    async setup() {
        await this.repo.init();
    }
    async listTasks() {
        return await this.repo.all();
    }
    async createTask(payload) {
        // Validate input (simple)
        if (!payload.title || payload.title.trim().length === 0) {
            throw new Error('Title is required');
        }
        const task = {
            title: payload.title.trim(),
            description: payload.description?.trim(),
            state: 'pending'
        };
        return await this.repo.create(task);
    }
    async updateTaskState(id, state) {
        const allowed = ['pending', 'in_progress', 'completed'];
        if (!allowed.includes(state))
            throw new Error('Invalid state');
        return await this.repo.updateState(id, state);
    }
}
exports.TaskService = TaskService;
