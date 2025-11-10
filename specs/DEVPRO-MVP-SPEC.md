# Spec-driven development with AI - DevPro Bolivia - MVP

## ¿Qué es Spec-driven development with AI?
Spec-driven development with AI es un enfoque donde se escribe una especificación formal (o semi-formal)
como única fuente de verdad, y un agente de IA genera artefactos de software a partir de esa especificación.
Difiere de TDD/BDD en que la especificación alimenta directamente al agente generativo y se itera
sobre los artefactos resultantes; la responsabilidad humana es revisar, corregir y asegurar el cumplimiento
de principios (p.ej. SOLID, Async/Await, TypeScript).

## Requisitos (resumen)
- Crear, listar y actualizar estado de tareas.
- Backend en TypeScript con Express, SQLite, Async/Await.
- Frontend en TypeScript que consume la API REST.
- Patrón modular tipo MVC, SRP (Single Responsibility), placeholders para Auth, sanitización.

## API (REST)
- GET /api/tasks -> lista todas las tareas
- POST /api/tasks -> crea tarea { title, description? } (estado inicial: pending)
- PATCH /api/tasks/:id/state -> actualiza estado { state } con valores: pending, in_progress, completed

## Data model (SQLite)
Table `tasks`:
- id INTEGER PRIMARY KEY AUTOINCREMENT
- title TEXT NOT NULL
- description TEXT
- state TEXT NOT NULL DEFAULT 'pending'
- created_at DATETIME DEFAULT CURRENT_TIMESTAMP
- updated_at DATETIME DEFAULT CURRENT_TIMESTAMP

## Non-functional
- Uso de async/await en todas las operaciones I/O.
- Código en TypeScript, tsconfig con target ES2020+.
- Comentarios y placeholders para autenticación/autorización.
- Buenas prácticas: validación de inputs, escape en queries (usando parameterized queries).

