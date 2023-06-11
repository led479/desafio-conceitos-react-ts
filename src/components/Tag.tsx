interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <div className="flex items-center justify-center bg-gray-400 py-0.5 px-2 rounded-full text-xs">{text}</div>
  )
}