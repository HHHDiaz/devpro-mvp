"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const db_1 = require("../db");
class TaskRepository {
    // Single responsibility: only DB operations
    async init() {
        const db = await (0, db_1.getDB)();
        await db.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        state TEXT NOT NULL DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
        return db;
    }
    async all() {
        const db = await (0, db_1.getDB)();
        const rows = await db.all("SELECT * FROM tasks ORDER BY id DESC;");
        return rows;
    }
    async create(task) {
        const db = await (0, db_1.getDB)();
        const result = await db.run("INSERT INTO tasks (title, description, state) VALUES (?, ?, ?);", task.title, task.description || null, task.state || 'pending');
        const id = result.lastID;
        const created = await db.get("SELECT * FROM tasks WHERE id = ?;", id);
        if (!created) {
            throw new Error('Failed to create task');
        }
        return created;
    }
    async updateState(id, state) {
        const db = await (0, db_1.getDB)();
        await db.run("UPDATE tasks SET state = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?;", state, id);
        const updated = await db.get("SELECT * FROM tasks WHERE id = ?;", id);
        return updated || null;
    }
}
exports.TaskRepository = TaskRepository;
