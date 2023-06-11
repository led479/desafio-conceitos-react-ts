import Paper from '../assets/paper.svg';

export function NoTasks() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-60 gap-4 text-gray-300 border-t border-gray-400'>
      <img src={Paper} />
      <div>
        <p className='font-bold'>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}