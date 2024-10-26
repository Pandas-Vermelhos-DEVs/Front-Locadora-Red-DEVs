import React, { useState } from 'react'
import Image from 'next/image'

const Cabacalho = ({isOpen,setIsOpen}) => {
  return (
    <header className='w-full bg-slate-500 fixed flex items-center justify-between py-2 px-4 top-0 z-[999]'>
      <div onClick={()=> setIsOpen(!isOpen)}>
        <Image
          src={'/menu.svg'}
          height={67}
          width={54}
        />
      </div>
      <div>
        <Image
            src='/logo_header.svg'
            height={67}
            width={54}
          />
      </div>
    </header>
  )
}

export default Cabacalho