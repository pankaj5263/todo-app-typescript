import React, {useState} from 'react';
import {Task, Priority} from '../types';

interface TaskInputProps {
    addTask: (task:Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({addTask}) : any => {
    const [taskText, setTaskText] = useState<string>('');
    const [taskPriority, setTaskPriority] = useState<Priority>('medium');

    const handleAddTask = () => {
        const newTask: Task = {
          id: Date.now(),
          text: taskText,
          status: 'pending',
          priority: taskPriority,
        };
        addTask(newTask);
        setTaskText('');
      };
      return (
        <div>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add new task"
          />
          <select onChange={(e) => setTaskPriority(e.target.value as Priority)} value={taskPriority}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      );
}

export default TaskInput;