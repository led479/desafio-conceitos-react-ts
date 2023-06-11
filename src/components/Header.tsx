import Logo from '../assets/logo.png'

export function Header() {
  return (
    <header className='bg-gray-700 min-h-[200px] w-full flex items-center justify-center'>
      <img width={126} height={48} src={Logo} />
    </header>
  )
}
