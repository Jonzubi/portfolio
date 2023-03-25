import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

export default function Header () {
  return (
    <header className='flex justify-around items-center'>
      <Logo />
      <HeaderMenu />
    </header>
  )
}
