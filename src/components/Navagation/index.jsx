import Image from 'next/image'
import React, { useState } from 'react'
import LinkNavigation from './LinkNavigation'

const Navegation = ({ isOpen, setIsOpen }) => {
  const linksNavigation = [
    {
      titulo: 'Carrinho',
      src: '/carrinho.svg',
      alt: 'carrinho',
    },
    {
      titulo: 'Décadas',
      src: '/film.svg',
      alt: 'filme',
    },
    {
      titulo: 'Gêneros',
      src: '/film.svg',
      alt: 'filme',
    },
    {
      titulo: 'Locadoras',
      src: '/sacola.svg',
      alt: 'sacola',
    },
    {
      titulo: 'Sobre nós',
      src: '/sobre.svg',
      alt: 'livro',
    },
  ]

  return (
    <>
      <div
        className='top-0 z-[1000] fixed h-full w-full bg-slate-600 opacity-70 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}></div>
      <div className='overflow-y-auto h-full w-[70vw] max-w-96 bg-destaque fixed z-[1000] top-0 '>
        <div className='sticky top-0 flex flex-col justify-end h-[20%] bg-[url("/bg_navegacao_mobile.png")] bg-cover bg-no-repeat'>
          <div className='flex items-center gap-2 relative '>
            <div className='m-2 border-2 rounded-full'>
              <Image src={'/person.png'} height={67} width={54} alt='perfil' />
            </div>
            <p>Username</p>
          </div>
        </div>
        <ul>
          {linksNavigation.map((link, index) => (
            <LinkNavigation key={link.titulo} {...link} index={index + 1} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navegation
