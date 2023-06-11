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
    <div className="flex w-full justify-between bg-gray-500">
      <div className="flex gap-3">
        <input type="checkbox" checked={isComplete} onChange={() => onCheckTask(id, !isComplete)} />
        <p className={isComplete ? 'line-through' : 'no-underline'}>{title}</p>
      </div>
      <button onClick={() => onRemoveTask(id)}>trash</button>
    </div>
  );
}