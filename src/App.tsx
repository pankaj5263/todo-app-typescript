import React, {useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './types';


const App: React.FC = (): any => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task:Task) => setTasks([...tasks, task]);

  const toggleTaskStatus = (id:number) => {
    console.log(id)
    setTasks(
      tasks.map(task => task.id === id ? {...task, status:task.status === 'completed' ? 'pending' : 'completed'}:task)
    )
  }

  console.log(tasks);

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
    </div>
  )
}
export default App;