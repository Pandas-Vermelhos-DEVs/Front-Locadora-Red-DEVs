'use client'

import {  useState } from 'react'
import Botao from '@/components/Botao/Botao'
import Link from 'next/link'
import { Navegacao } from '@/components/Navegacao/navegacao'
import Campo from '@/components/Campo/Campo'
import { PaginaPadrao } from '@/components/PaginaPadrao'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    senha: '',
  })

  const handleChange = (tipo) => (novaSenha) => {
    setData((prevData) => ({
      ...prevData,
      [tipo]: novaSenha,
    }))
  }

  return (
    <PaginaPadrao>
      <Navegacao lastUrl={'/'} closeUrl={'/'} />
      <div className='flex flex-col justify-between items-center h-[350px]'>
        <h1 className={'text-2xl font-bold'}>Login</h1>
        <Campo
          placeholder={'Email'}
          valor={data.email}
          setValor={handleChange('email')}
          tipo={'email'}
        />
        <Campo
          placeholder={'senha'}
          valor={data.senha}
          setValor={handleChange('senha')}
          tipo={'password'}
        />
        <Link href={'/Redefinir'} className={'text-destaque underline'}>Esqueci minha Senha</Link>
        <Botao>Entrar</Botao>
        <p className='text-destaque'>ou</p>
        <Link href={'/Cadastro'}>
          <Botao>Cadastre-se</Botao>
        </Link>
      </div>
    </PaginaPadrao>
  )
}
