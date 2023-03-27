export default function HeaderMenuItem ({ section }) {
  return (
    <span className='mx-4 p-4 px-8 rounded-lg bg-slate-100 hover:bg-blue-500 hover:text-white text-center cursor-pointer font-bold transition'>
      {section}
    </span>
  )
}
