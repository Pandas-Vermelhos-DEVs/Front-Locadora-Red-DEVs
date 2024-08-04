'use client'

import { useState } from 'react'
import Botao from '@/components/Botao/Botao'
import Link from 'next/link'
import { Navegacao } from '@/components/Navegacao/navegacao'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    senha: '',
  })

  return (
    <>
      <Navegacao lastUrl={'/'} closeUrl={'/'} />

      <div className='Form_login'>
        <h1>Login</h1>
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

        <p className={'destaque'}>Esqueci minha senha</p>
        <Botao>Entrar</Botao>
        <p className={'destaque'}>ou</p>
        <Link href={'/Cadastro'}>
          <Botao>Cadastre-se</Botao>
        </Link>
      </div>
    </>
  )
}
