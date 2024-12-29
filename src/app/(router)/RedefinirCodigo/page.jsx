'use client'

import Botao from '@/components/Botao/Botao'
import { Navegacao } from '@/components/Navegacao/navegacao'
import { PaginaPadrao } from '@/components/PaginaPadrao'

export default function RedefinirCodigo() {
  return (
    <PaginaPadrao>
      <Navegacao lastUrl={'/Login'} closeUrl={'/'} />
      <div className={'flex flex-col justify-between items-center h-[350px]'}>
        <h1 className={'text-2xl font-bold'}>Redefinir Senha</h1>

        <p className=' text-center text-destaque underline'>
          Enviamos um codigo de verificação para{' '}
          <strong className='font-bold'>fulano@gmail.com</strong>
        </p>

        <span className='bg-destaque border-none py-[0.5rem] px-[2rem]'>
          Reenviar daqui 15...
        </span>

        <div className='flex w-[80vw] gap-2'>
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
          <input
            type='number'
            className='w-[20%] bg-transparent border outline-none text-center'
          />
        </div>

        <Botao>Confirmar</Botao>
      </div>
    </PaginaPadrao>
  )
}
