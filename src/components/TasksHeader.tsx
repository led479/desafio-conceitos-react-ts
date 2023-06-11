import { Tag } from "./Tag";
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
        <span className="text-blue">Tarefas criadas</span>
        <Tag text={`${tasksLength}`} />
      </div>
      <div className="flex gap-2">
        <span className="text-purple">Concluídas</span>
        <Tag text={tasksLength === 0 ? '0' : `${tasksCompleted} de ${tasksLength}`} />
      </div>
    </div>
  );
}
