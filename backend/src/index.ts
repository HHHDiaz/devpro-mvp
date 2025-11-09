import express from 'express';
import bodyParser from 'body-parser';
import { initController, listTasks, createTask, updateTaskState } from './controllers/taskController';
import path from 'path';

// App follows a small MVC-like modular separation
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.use(bodyParser.json());

// Security placeholders: input sanitization and auth middleware hook
app.use((req, res, next) => {
  // Placeholder: Authentication middleware should be here
  // e.g. validate JWT, set req.user
  next();
});

// REST API
app.get('/api/tasks', listTasks);
app.post('/api/tasks', createTask); // body: {title, description}
app.patch('/api/tasks/:id/state', updateTaskState); // body: {state}

// Serve frontend static (if built into frontend/dist)
app.use(express.static(path.resolve(__dirname, '../public')));

initController().then(() => {
  app.listen(PORT, () => {
    console.log(`DevPro MVP backend running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize', err);
  process.exit(1);
});
