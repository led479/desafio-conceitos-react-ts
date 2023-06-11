import { DeleteTaskButton } from "./DeleteTaskButton";


interface TaskProps {
  task: TaskType;
  onCheckTask: (id: string, isComplete: boolean) => void;
  onRemoveTask: (id: string) => void;
}

export type TaskType = {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Task({ task: { id, title, isComplete }, onCheckTask, onRemoveTask }: TaskProps) {
  return (
    <div className="flex items-start w-full gap-3 bg-gray-500 p-4 rounded-lg">
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        className="mt-0.5 rounded-full border-2 cursor-pointer p-2 bg-gray-500 border-blue
         hover:border-blue-dark checked:bg-purple-dark checked:border-purple-dark
         checked:hover:bg-purple checked:hover:border-purple"
        checked={isComplete}
        onChange={() => onCheckTask(id, !isComplete)}
      />
      <label htmlFor={`checkbox-${id}`} className={`flex-grow ${isComplete ? 'line-through text-gray-300' : 'no-underline'}`}>
        {title}
      </label>
      <DeleteTaskButton onClick={() => onRemoveTask(id)} />
    </div>
  );
}