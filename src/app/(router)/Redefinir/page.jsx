'use client'

import { useState } from 'react'
import Campo from '@/components/Campo/Campo'

export default function RedefinirSenha() {
  const [data, setData] = useState({
    senha: 'senha ',
    novasenha: 'nova senha',
  })

  //   console.log(data)
  // console.log(setData)
  return (
    <div>
      <Campo
        senha={data.senha}
        novaSenha={data.novasenha}
        setValor={setData}
        placeholder={'testando'}
        {...data}
      />
      {/* <Campo
        valor={data}
        setValor={setData}
        placeholder={"testando"}
        {...data}
      /> */}
    </div>
  )
}
