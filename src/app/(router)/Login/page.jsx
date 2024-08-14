'use client'

import { useEffect, useState } from 'react'
import Botao from '@/components/Botao/Botao'
import Link from 'next/link'

import { Navegacao } from '@/components/Navegacao/navegacao'
import Campo from '@/components/Campo/Campo'
import { Loader } from '@/components/Loadear'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    senha: '',
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])


  const handleChange = (tipo) => (novaSenha) => {
    setData((prevData) => ({
      ...prevData,
      [tipo]: novaSenha,
    }))
  }

  return (
    <>
      {
        loading ?
          <>
            <Loader />
          </>
          :
          <>
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
              <p className='text-destaque'>Esqueci minha senha</p>
              <Botao>Entrar</Botao>
              <p className='text-destaque'>ou</p>
              <Link href={'/Cadastro'}>
                <Botao>Cadastre-se</Botao>
              </Link>
            </div>
          </>
      }

    </>
  )
}
