export default function Home () {
  return (
    <section className='flex bg-blue-50 max-h-screen'>
      <div className='flex flex-col h-screen w-1/2 justify-center items-center'>
        <span className='text-6xl font-bold py-2'>
          Hello world!
        </span>
        <span className='text-6xl font-bold py-2'>
          I'm <span className='text-blue-500'>Jon</span>
        </span>
        <span className='text-6xl font-bold py-2'>
          a <span className='text-blue-500'>FullStack Developer</span>
        </span>
      </div>
      <div className='flex flex-col' />
    </section>
  )
}
