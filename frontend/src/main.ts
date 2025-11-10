import { listTasks, createTask, updateTaskState } from './api';

const tasksDiv = document.getElementById('tasks')!;
const form = document.getElementById('createForm') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const descInput = document.getElementById('description') as HTMLInputElement;

async function refresh() {
  const tasks = await listTasks();
  tasksDiv.innerHTML = '';
  for (const t of tasks) {
    const el = document.createElement('div');
    el.className = 'task';
    el.innerHTML = `<strong>${t.title}</strong> <em>(${t.state})</em>
      <div>${t.description || ''}</div>`;
    const controls = document.createElement('div');
    controls.className = 'controls';
    const btnProgress = document.createElement('button');
    btnProgress.textContent = 'En progreso';
    btnProgress.onclick = async () => {
      await updateTaskState(t.id, 'in_progress');
      await refresh();
    };
    const btnComplete = document.createElement('button');
    btnComplete.textContent = 'Completar';
    btnComplete.onclick = async () => {
      await updateTaskState(t.id, 'completed');
      await refresh();
    };
    controls.appendChild(btnProgress);
    controls.appendChild(btnComplete);
    el.appendChild(controls);
    tasksDiv.appendChild(el);
  }
}

form.onsubmit = async (e) => {
  e.preventDefault();
  await createTask({ title: titleInput.value, description: descInput.value });
  titleInput.value = '';
  descInput.value = '';
  await refresh();
};

refresh();
