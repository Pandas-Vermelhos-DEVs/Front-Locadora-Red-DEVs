'use client'

import { useState } from 'react'
import Campo from '@/components/Campo/Campo'

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
    <div>
      <Campo valor={data.senha} setValor={handleChange('senha')} placeholder={'digite uma senha'} tipo='password' />
      <Campo valor={data.novasenha} setValor={handleChange('novasenha')} placeholder={'repita a nova senha'}  tipo='password'/>
    </div>
  )
}
