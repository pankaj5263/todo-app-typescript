export type TaskStatus = 'pending' | 'completed';

export type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: number;
    text: string;
    status: TaskStatus;
    priority: Priority
}

export interface TaskContextProps {
    task: Task[];
    addTask:(task:Task) => void;
    toggleTaskStatus: (id: number) => void;
    delete:(id:number) => void;
}