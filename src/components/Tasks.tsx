import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TasksHeader } from "./TasksHeader";
import { Task, TaskType } from "./Task";
import { AddTask } from "./AddTask";
import { NoTasks } from "./NoTasks";

export function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isComplete: true
    },
    {
      id: uuidv4(),
      title: 'Estudar Typescript',
      isComplete: false
    },
    {
      id: uuidv4(),
      title: 'Estudar Tailwind',
      isComplete: false
    }
  ])

  const handleAddTask = (title: string) => {
    setTasks((state) => [...state, { id: uuidv4(), title, isComplete: false }]);
  }

  const handleCheckTask = (id: string, isComplete: boolean) => {
    setTasks((state) => state.map(task => {
      if (task.id === id) {
        task.isComplete = isComplete;
      }

      return task;
    }))
  }

  const handleRemoveTask = (id: string) => {
    setTasks((state) => state.filter(task => task.id !== id));
  }

  return (
    <div className='max-w-3xl px-5 w-full flex flex-col items-center gap-16'>
      <AddTask onAddTask={handleAddTask} />
      <div className='flex flex-col items-center gap-6 w-full'>
        <TasksHeader tasks={tasks} />
        {
          tasks.length === 0 ?
            <NoTasks /> :
            tasks.map(task => (
              <Task key={task.id} task={task} onCheckTask={handleCheckTask} onRemoveTask={handleRemoveTask} />
            ))
        }
      </div>
    </div>
  );
}