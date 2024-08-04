import Botao from '@/components/Botao/Botao'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}
