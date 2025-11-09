export type TaskState = 'pending' | 'in_progress' | 'completed';

export interface Task {
  id?: number; // optional for creation
  title: string;
  description?: string;
  state: TaskState;
  created_at?: string;
  updated_at?: string;
}
