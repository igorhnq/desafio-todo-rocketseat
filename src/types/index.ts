export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TaskProps {
  task: Task;
  onDeleteTask: (taskId: number) => void;
  onToggleTaskCompletion: (taskId: number) => void;
}

export interface InputProps {
  onAddTask: (taskText: string) => void;
}

export interface ButtonProps {
  disabled?: boolean;
}
