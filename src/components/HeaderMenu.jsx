import HeaderMenuItem from './HeaderMenuItem'

export default function HeaderMenu () {
  const sections = [
    'Home',
    'About',
    'Projects',
    'Experience'
  ]
  return (
    <div className='flex'>
      {sections.map(section => (
        <HeaderMenuItem section={section} key={section} />
      ))}
    </div>
  )
}
