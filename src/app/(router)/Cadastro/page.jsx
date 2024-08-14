'use client'

import { useEffect, useState } from 'react'
import { Navegacao } from '@/components/Navegacao/navegacao'
import Botao from '@/components/Botao/Botao'
import Campo from '@/components/Campo/Campo'
import { Loader } from '@/components/Loadear'

export default function Cadastro() {
  const [data, setData] = useState({
    email: '',
    senha: '',
    confirmar_senha: '',
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
            <Navegacao lastUrl={'/Login'} closeUrl={'/'} />

            <div className={'flex flex-col justify-between items-center h-[350px]'}>
              <h1 className={'text-2xl font-bold'}>Cadastro</h1>
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
              <Campo
                placeholder={'confirmar_senha'}
                valor={data.confirmar_senha}
                setValor={handleChange('confirmar_senha')}
                tipo={'password'}
              />

              <Botao>Criar Conta</Botao>
            </div>
          </>
      }
    </>
  )
}
