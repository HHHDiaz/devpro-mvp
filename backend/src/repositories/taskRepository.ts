import { getDB } from '../db';
import { Task } from '../models/task';

export class TaskRepository {
  // Single responsibility: only DB operations
  async init() {
    const db = await getDB();
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

  async all(): Promise<Task[]> {
    const db = await getDB();
    const rows = await db.all<Task[]>("SELECT * FROM tasks ORDER BY id DESC;");
    return rows;
  }

  async create(task: Task): Promise<Task> {
    const db = await getDB();
    const result = await db.run(
      "INSERT INTO tasks (title, description, state) VALUES (?, ?, ?);",
      task.title, task.description || null, task.state || 'pending'
    );
    const id = result.lastID;
    const created = await db.get<Task>("SELECT * FROM tasks WHERE id = ?;", id);
    if (!created) {
    throw new Error('Failed to create task');
  }
    return created;
  }

  async updateState(id: number, state: string): Promise<Task | null> {
    const db = await getDB();
    await db.run(
      "UPDATE tasks SET state = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?;",
      state, id
    );
    const updated = await db.get<Task>("SELECT * FROM tasks WHERE id = ?;", id);
    return updated || null;
  }
}
