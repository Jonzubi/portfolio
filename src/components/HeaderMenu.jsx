import HeaderMenuItem from './HeaderMenuItem'

export default function HeaderMenu () {
  const sections = [
    'Home',
    'About',
    'Projects'
  ]
  return (
    <div className='grid grid-cols-3 gap-10'>
      {sections.map(section => (
        <HeaderMenuItem section={section} key={section} />
      ))}
    </div>
  )
}
