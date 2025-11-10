
# 🧩 Proyecto DevPro MVP — Gestor de Tareas con IA y TypeScript

## 📘 Descripción General

**DevPro MVP** es un sistema de gestión de tareas desarrollado con el enfoque **Spec-Driven Development (Desarrollo Dirigido por Especificaciones)**  por Harold Díaz **.  
Su objetivo es modernizar la gestión interna de proyectos de **DevPro Bolivia**, facilitando la creación, seguimiento y actualización de tareas.

---

## 🎯 Objetivos del Proyecto

- Aplicar **TypeScript**, **REST**, **SOLID** y **Async/Await** en un entorno real.
- Desarrollar un **Producto Mínimo Viable (MVP)** funcional.
- Diseñar una arquitectura modular con **Express**, **SQLite**, y **React**.
- Mantener trazabilidad mediante commits y especificaciones detalladas.

---

## 🧱 Estructura del Proyecto

```
devpro-mvp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── repositories/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── db.ts
│   │   └── index.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Tecnologías Utilizadas

| Componente | Tecnología |
|-------------|-------------|
| Lenguaje principal | TypeScript |
| Backend | Node.js + Express |
| Frontend | React + Vite |
| Base de datos | SQLite |
| Arquitectura | REST + MVC + SOLID |
| Asincronía | Promises / Async-Await |

---

## 🧩 Funcionalidades Principales

- 📝 Crear nuevas tareas con título y descripción.
- 📋 Listar todas las tareas existentes.
- 🔁 Actualizar el estado de una tarea.
- 🗑️ Eliminar tareas completadas.
- 🌐 API REST documentada para integración.

---

## 🧠 Principios Aplicados

- **Single Responsibility:** cada clase o función tiene una única responsabilidad.
- **Open/Closed Principle:** componentes extensibles sin modificar el código base.
- **RESTful API:** diseño claro con recursos bien definidos.
- **Async/Await:** código asíncrono limpio y mantenible.

---

## 🧪 API Endpoints

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| GET | `/api/tasks` | Listar todas las tareas |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/:id` | Editar una tarea existente |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |

---

## 💾 Base de Datos SQLite

**Tabla:** `tasks`

| Campo | Tipo | Descripción |
|--------|------|-------------|
| id | INTEGER | Clave primaria |
| title | TEXT | Título de la tarea |
| description | TEXT | Detalle de la tarea |
| status | TEXT | Estado (pendiente, en progreso, completada) |

---

## 🚀 Ejecución Local

1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/<usuario>/devpro-mvp.git
cd devpro-mvp
```

2️⃣ **Instalar dependencias del backend**
```bash
cd backend
npm install
npm run dev
```

3️⃣ **Instalar dependencias del frontend**
```bash
cd ../frontend
npm install
npm run dev
```

4️⃣ **Abrir en el navegador:**  
Frontend → `http://localhost:5173`  
Backend API → `http://localhost:3333/api/tasks`

---

## ☁️ Despliegue en la Nube

### Render
- Crea un nuevo **Web Service** desde tu repo de GitHub.
- **Build Command:**
  ```bash
  npm install && npm run build
  ```
- **Start Command:**
  ```bash
  npm start
  ```

### Railway
- Subir el código del backend.
- Definir variables de entorno `PORT` y `NODE_ENV`.

---

## 🧭 Control de Versiones (Ejemplo de Commits)

| Etapa | Commit |
|-------|--------|
| Inicialización | 🧱 Inicializa el repositorio del proyecto |
| Configuración TS | ⚙️ Configura TypeScript y dependencias base |
| Servidor Express | 🚀 Crea servidor Express básico |
| Base de datos | 🗃️ Crea conexión SQLite |
| API REST | 🌐 Implementa endpoints CRUD |
| Frontend | 💻 Añade interfaz React |
| Despliegue | ☁️ Configura Render para producción |

---

## 🧑‍💻 Autor

Proyecto desarrollado por **DevPro Bolivia**, por Harold Díaz, bajo el enfoque de **Spec-Driven Development (SDD)**.

