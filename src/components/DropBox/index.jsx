import Link from 'next/link'
import React from 'react'

const DropBox = ({ lista, open }) => {
  if (!open) return null

  return (
    <ul className=''>
      {lista.map((item, index) => (
        <Link href={'#'} key={index}>
          <li className='p-4 border-b-2'>{item}</li>
        </Link>
      ))}
    </ul>
  )
}

export default DropBox
