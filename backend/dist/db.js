"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = getDB;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
const DB_PATH = path_1.default.resolve(__dirname, '../data/tasks.db');
async function getDB() {
    // Using sqlite with sqlite package via sqlite wrapper to use async/await
    const db = await (0, sqlite_1.open)({
        filename: DB_PATH,
        driver: sqlite3_1.default.Database
    });
    // enable foreign keys and best practices placeholders
    await db.exec('PRAGMA foreign_keys = ON;');
    return db;
}
