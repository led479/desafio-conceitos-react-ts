import { PlusCircle } from "phosphor-react";
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

  return <form onSubmit={handleSubmit} className="flex gap-2 w-full -mt-7">
    <input
      className="w-full p-4 bg-gray-500 rounded-lg"
      value={title}
      onChange={handleTitleChange}
      placeholder="Adicione uma nova tarefa"
      required
    />
    <button className="flex p-4 gap-2 bg-blue-dark rounded-lg items-center hover:bg-blue">Criar <PlusCircle size={20} /></button>
  </form>
}
