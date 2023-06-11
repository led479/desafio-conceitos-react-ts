import { ChangeEvent, FormEvent, useState } from "react";

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTitle('');
    onAddTask(title);
  }

  return <form onSubmit={handleSubmit} className="flex gap-2 w-full -mt-4">
    <input className="w-full p-2 bg-blue-dark" value={title} onChange={handleTitleChange} placeholder="Adicione uma nova tarefa" />
    <button>Criar <i>+</i></button>
  </form>
}
