import React from 'react';
import {Task as TaskType} from '../types';
import Task from './Task';

interface TaskListProps {
    tasks: TaskType[];
    toggleTaskStatus: (id: number) => void;
    deleteTask:(id:number) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, toggleTaskStatus, deleteTask}): any => {
    return (
        <div>
          {tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              toggleStatus={() => toggleTaskStatus(task.id)} 
              deleteTask={() => deleteTask(task.id)} 
            />
          ))}
        </div>
      );
}

export default TaskList;