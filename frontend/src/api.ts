const API_BASE = (window as any).__API_BASE__ || '/api';

export async function listTasks() {
  const res = await fetch(API_BASE + '/tasks');
  return await res.json();
}

export async function createTask(payload: { title: string; description?: string }) {
  const res = await fetch(API_BASE + '/tasks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  return await res.json();
}

export async function updateTaskState(id: number, state: string) {
  const res = await fetch(API_BASE + `/tasks/${id}/state`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ state })
  });
  return await res.json();
}
