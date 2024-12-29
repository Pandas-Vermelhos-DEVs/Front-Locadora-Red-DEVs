'use client'

import { useState } from 'react'
import Campo from '@/components/Campo/Campo'
import { PaginaPadrao } from '@/components/PaginaPadrao'
import { Navegacao } from '@/components/Navegacao/navegacao'
import Botao from '@/components/Botao/Botao'

export default function RedefinirSenha() {
  const [data, setData] = useState({
    senha: '',
    novasenha: '',
  })

  const handleChange = (tipo) => (novaSenha) => {
    setData((prevData) => ({
      ...prevData,
      [tipo]: novaSenha,
    }))
  }

  return (
    <PaginaPadrao>
      <Navegacao lastUrl={'/Login'} closeUrl={'/'} />
      <div className={'flex flex-col justify-between items-center h-[350px]'}>
        <h1 className={'text-2xl font-bold'}>Redefinir Senha</h1>

        <Campo
          placeholder={'senha'}
          valor={data.senha}
          setValor={handleChange('senha')}
          tipo={'Password'}
        />
        <Campo
          placeholder={'Confirm Password'}
          valor={data.confirmar_senha}
          setValor={handleChange('confirmar_senha')}
          tipo={'password'}
        />

        <Botao>Confirmar</Botao>
      </div>
    </PaginaPadrao>
  )
}
