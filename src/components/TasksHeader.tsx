import { TaskType } from "./Task";

interface TasksHeaderProps {
  tasks: TaskType[]
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isComplete).length;

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-2">
        <span>Tarefas criadas</span>
        <i>{tasksLength}</i>
      </div>
      <div className="flex gap-2">
        <span>Concluídas</span>
        <i>{tasksCompleted} de {tasksLength}</i>
      </div>
    </div>
  );
}
