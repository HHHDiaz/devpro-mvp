export async function listTasks() {
  const res = await fetch('/api/tasks');
  return await res.json();
}

export async function createTask(payload) {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  return await res.json();
}

export async function updateTaskState(id, state) {
  const res = await fetch(`/api/tasks/${id}/state`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ state })
  });
  return await res.json();
}
