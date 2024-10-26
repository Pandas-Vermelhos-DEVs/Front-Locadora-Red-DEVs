import React from 'react'

const ContainerFilmes = ({titulo}) => {
  return (
    <section class="flex flex-col gap-4 p-2 ">
    <h1 class="text-xl font-semibold text-white">{titulo}</h1>
    <div class="flex overflow-x-auto w-full">
      <div class="flex gap-2">
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
      </div>
    </div>
  </section>
  )
}

export default ContainerFilmes