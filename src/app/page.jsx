'use client'

import Botao from '@/components/Botao/Botao'
import { PaginaPadrao } from '@/components/PaginaPadrao'
import Link from 'next/link'
export default function Home() {

  return (
    <PaginaPadrao>
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
        <Link href={'/RedefinirCodigo'}>
          <Botao>Redefinir Senha(código)</Botao>
        </Link>
      </div>
    </PaginaPadrao>
  )
}
