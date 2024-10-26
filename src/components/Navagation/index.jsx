import Image from 'next/image'
import React from 'react'

const Navegation = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className='top-0 z-[1000] fixed h-full w-full bg-slate-600 opacity-70 cursor-pointer' onClick={() => setIsOpen(!isOpen)} ></div>
      <div className='overflow-y-auto h-full w-[70vw] max-w-96 bg-destaque fixed z-[1000] top-0 '>
        <div className='sticky top-0 flex flex-col justify-end h-[20%] bg-[url("/bg_navegacao_mobile.png")] bg-cover bg-no-repeat'>
          <div className='flex items-center gap-2 relative '>
            <div className='m-2 border-2 rounded-full'>
              <Image
                src={'/person.png'}
                height={67}
                width={54}
              />
            </div>
            <p>Username</p>
          </div>

        </div>
        <ul>
          <li className=' px-4 border-b-2 h-[80px] flex items-center gap-2'>
            <Image
              src={'/carrinho.svg'}
              height={25}
              width={25}
            />
            Carrinho

          </li>
          <li className=' px-4 border-b-2 h-[80px] flex items-center gap-2'>
          <Image
              src={'/film.svg'}
              height={25}
              width={25}
            />
            Décadas
          </li>
          <li className=' px-4 border-b-2 h-[80px] flex items-center gap-2'>
          <Image
              src={'/film.svg'}
              height={25}
              width={25}
            />
            Gêneros

          </li>
          <li className=' px-4 border-b-2 h-[80px] flex items-center gap-2'>
          <Image
              src={'/sacola.svg'}
              height={25}
              width={25}
            />
            Locadoras

          </li>
          <li className=' px-4 border-b-2 h-[80px] flex items-center gap-2'>
          <Image
              src={'/sobre.svg'}
              height={25}
              width={25}
            />
            Sobre nós
          </li>
        </ul>
      </div>
    </>

  )
}

export default Navegation