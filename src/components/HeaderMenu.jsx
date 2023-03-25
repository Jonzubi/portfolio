export default function HeaderMenu () {
  const sections = [
    'Home',
    'About',
    'Projects'
  ]
  return (
    <div className='grid grid-cols-3 gap-10'>
      {sections.map(section => (
        <span key={section} className='p-4 rounded-lg bg-slate-200 hover:bg-blue-300 text-center cursor-pointer'>{section}</span>
      ))}
    </div>
  )
}
