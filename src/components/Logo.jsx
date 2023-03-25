import Image from 'next/image'

export default function Logo () {
  return (
    <div className='flex items-center'>
      <Image className='rounded-3xl' alt='imagenPerfil' src='/imagenPerfil.jpeg' width={50} height='50' />
      <span className='font-bold text-3xl ml-6'>
        Jon Zubizarreta
      </span>
    </div>
  )
}
