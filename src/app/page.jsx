'use client'
import Botao from '@/components/Botao/Botao'
import Cabacalho from '@/components/Cabacalho'
import ContainerFilmes from '@/components/ContainerFilmes'
import Navegation from '@/components/Navagation'
import { PaginaPadrao } from '@/components/PaginaPadrao'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PaginaPadrao>
      <Cabacalho isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Navegation isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
      <main>
        <div className='h-[100vh] bg-[url("/bg_home.png")] bg-cover bg-no-repeat'>
          <div className=' h-full gap-4 flex flex-col items-center justify-end'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold font-anton uppercase'>
                Titanic
              </h1>
              <p>Garanta sua fita</p>
            </div>
            <Botao>Compre Agora</Botao>
            <div className='mt-5 text-destaque flex flex-col items-center'>
              <p>Veja mais Filmes</p>
              <Image src={'/arrow_drop_up.svg'} height={67} width={54} />
            </div>
          </div>
        </div>
        <ContainerFilmes titulo={'Destaques da semana'} />
        <ContainerFilmes titulo={'Vencedores do Oscar'} />
        <ContainerFilmes titulo={'Nostalgia'} />

        {/* Observação: Sobre as partes escritas em html caso queira  pode ser realizada a criação de partes reaproveitaveis para outras paginas por exemplo ter um banner unico para cade pagina banner está localizado na parte acima dos containers*/}

        <div className=' mt-8 flex flex-col gap-8 p-4 bg-[url("/bg_home_locadora_sobre.png")] bg-cover bg-no-repeat'>
          <section className='flex flex-col items-center'>
            <Image src={'/locadora.png'} height={540} width={520} />
            <Botao>VER MAIS</Botao>
          </section>

          <section className='flex flex-col items-center '>
            <div className='relative'>
              <Image src={'/sobre.png'} height={540} width={520} />
            </div>
            <Botao>Sobre nós</Botao>
          </section>
        </div>
      </main>
    </PaginaPadrao>
  )
}
