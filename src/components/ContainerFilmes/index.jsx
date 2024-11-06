import React from 'react'

const ContainerFilmes = ({titulo}) => {
  return (
    <section className="flex flex-col gap-4 p-2 ">
    <h1 className="text-xl font-semibold text-white">{titulo}</h1>
    <div className="flex overflow-x-auto w-full">
      <div className="flex gap-2">
        {/* Aqui será listado os filmes que virao do banco ent basicamente essas divs serao reduzidas a uma unica div ou a um componente chamado filme. */}
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
        <div className='w-[123px] h-[200px] bg-white'></div>
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