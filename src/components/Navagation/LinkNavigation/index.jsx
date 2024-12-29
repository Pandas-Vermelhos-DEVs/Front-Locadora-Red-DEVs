import DropBox from '@/components/DropBox'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const LinkNavigation = ({ titulo, src, alt, index }) => {
  const [openDropBox, setOpenDropBox] = useState(null)

  const handleDropBoxToggle = (index) => {
    setOpenDropBox((prevIndex) => (prevIndex === index ? null : index))
  }

  /* Posso abstrair esses arrays e colococar num arquico a parte e chamalos para deixar o codigo mais limpo */

  const generos = [
    'Ação e aventura',
    'Drama',
    'Comédia romântica',
    'Ficção científica',
    'Terror',
  ]
  const decadas = ['10 a 30', '30 a 40', '50 a 60', '70 a 80', '90 a 2000']

  return (
    <>
      <Link href={''}>
        {' '}
        {/* Link pode ser passado como props, ou utilizar '/${item}' */}
        <li
          className=' px-4 border-b-2 h-[80px] flex items-center gap-2'
          onClick={() => handleDropBoxToggle(index)}>
          <Image src={src} height={25} width={25} alt={alt} />
          {titulo}
        </li>
      </Link>
      {index === 2 || index === 3 ? (
        <DropBox
          lista={index === 2 ? generos : decadas}
          open={openDropBox === index}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default LinkNavigation
