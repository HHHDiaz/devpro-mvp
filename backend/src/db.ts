import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

const DB_PATH = path.resolve(__dirname, '../data/tasks.db');

export async function getDB(): Promise<Database> {
  // Using sqlite with sqlite package via sqlite wrapper to use async/await
  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database
  });
  // enable foreign keys and best practices placeholders
  await db.exec('PRAGMA foreign_keys = ON;');
  return db;
}
