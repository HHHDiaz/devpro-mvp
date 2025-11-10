"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initController = initController;
exports.listTasks = listTasks;
exports.createTask = createTask;
exports.updateTaskState = updateTaskState;
const taskService_1 = require("../services/taskService");
const service = new taskService_1.TaskService();
async function initController() {
    await service.setup();
}
async function listTasks(req, res) {
    try {
        const tasks = await service.listTasks();
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ error: String(err) });
    }
}
async function createTask(req, res) {
    try {
        // Placeholder for auth: req.user ...
        const payload = req.body;
        const task = await service.createTask(payload);
        res.status(201).json(task);
    }
    catch (err) {
        res.status(400).json({ error: String(err) });
    }
}
async function updateTaskState(req, res) {
    try {
        const id = Number(req.params.id);
        const { state } = req.body;
        const updated = await service.updateTaskState(id, state);
        if (!updated)
            return res.status(404).json({ error: 'Not found' });
        res.json(updated);
    }
    catch (err) {
        res.status(400).json({ error: String(err) });
    }
}
