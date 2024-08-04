'use client'

import { useState } from 'react'
import { Navegacao } from '@/components/Navegacao/navegacao'
import Link from 'next/link'
import Botao from '@/components/Botao/Botao'

export default function Cadastro() {
  const [data, setData] = useState({
    email: '',
    senha: '',
    confirmar_senha: '',
  })
  return (
    <>
      <Navegacao lastUrl={'/Login'} closeUrl={'/'} />
      <div className='Form_login'>
        <h1>Cadastro</h1>
        <input
          className={'Campo'}
          type={'text'}
          placeholder={'Email'}
          value={data.email}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />

        <input
          className={'Campo'}
          type={'password'}
          placeholder={'Password'}
          value={data.senha}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              senha: e.target.value,
            }))
          }
        />
        <input
          className={'Campo'}
          type={'password'}
          placeholder={'Confirm Password'}
          value={data.confirmar_senha}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              confirmar_senha: e.target.value,
            }))
          }
        />

        <Botao>Criar Conta</Botao>
      </div>
    </>
  )
}
