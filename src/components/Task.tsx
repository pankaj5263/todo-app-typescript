import React from 'react';
import {Task as TaskType} from '../types';

interface TaskProps {
    task: TaskType;
    toggleStatus:()=>void;
    deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({task, toggleStatus, deleteTask}): any => {
    return (
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            checked={task.status === 'completed'} 
            onChange={toggleStatus} 
          />
          <span style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
            {task.text} - {task.priority}
          </span>
          <button onClick={deleteTask}>Delete</button>
        </div>
      );
    
}

export default Task;