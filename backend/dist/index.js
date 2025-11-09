"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const taskController_1 = require("./controllers/taskController");
const path_1 = __importDefault(require("path"));
// App follows a small MVC-like modular separation
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
app.use(body_parser_1.default.json());
// Security placeholders: input sanitization and auth middleware hook
app.use((req, res, next) => {
    // Placeholder: Authentication middleware should be here
    // e.g. validate JWT, set req.user
    next();
});
// REST API
app.get('/api/tasks', taskController_1.listTasks);
app.post('/api/tasks', taskController_1.createTask); // body: {title, description}
app.patch('/api/tasks/:id/state', taskController_1.updateTaskState); // body: {state}
// Serve frontend static (if built into frontend/dist)
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
(0, taskController_1.initController)().then(() => {
    app.listen(PORT, () => {
        console.log(`DevPro MVP backend running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to initialize', err);
    process.exit(1);
});
