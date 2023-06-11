import { Trash } from "phosphor-react";

interface DeleteTaskButtonProps {
  onClick: () => void;
}

export function DeleteTaskButton({ onClick }: DeleteTaskButtonProps) {
  return (
    <button
      className="flex items-center justify-center p-1 bg-transparent rounded text-gray-300 hover:bg-gray-400 hover:text-danger"
      onClick={onClick}
    >
      <Trash size={18} />
    </button>
  )
}