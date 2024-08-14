'use client'

import Botao from '@/components/Botao/Botao'
import { Loader } from '@/components/Loadear'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    <>
      {loading ?
        <>
          <Loader />
        </> :
        <>
          <h1>Home</h1>
          <div>
            <Link href={'/Login'}>
              <Botao>Login</Botao>
            </Link>
            <Link href={'/Cadastro'}>
              <Botao>Cadastro</Botao>
            </Link>
            <Link href={'/Redefinir'}>
              <Botao>Redefinir Senha</Botao>
            </Link>

          </div>
        </>}

    </>
  )
}
