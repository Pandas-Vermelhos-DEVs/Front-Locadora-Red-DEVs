'use client'
import { useState } from 'react'
import { Navegacao } from '@/components/Navegacao/navegacao'
import Botao from '@/components/Botao/Botao'
import Campo from '@/components/Campo/Campo'
import { PaginaPadrao } from '@/components/PaginaPadrao'
import { api } from '@/app/lib/api'
import axios from 'axios'

export default function Cadastro() {
  const [data, setData] = useState({
    email: '',
    senha: '',
    confirmar_senha: '',
  })

  const handleChange = (tipo) => (novaSenha) => {
    setData((prevData) => ({
      ...prevData,
      [tipo]: novaSenha,
    }))
  }

  // const RegistrarUsuario = async () => {
  //   axios
  //     .post('http://localhost:3001/Register', data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // }

  async function RegistrarUsuario() {
    // console.log(2)
    try {
      const response = await api.post('/register', data)
      console.log(response)
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        console.log('Requisição abortada devido ao timeout.')
      } else {
        console.log('Outro erro ocorreu:', error.message)
      }
    }
  }

  return (
    <PaginaPadrao>
      <Navegacao lastUrl={'/Login'} closeUrl={'/'} />
      <form
        className={'flex flex-col justify-between items-center h-[350px]'}
        onSubmit={RegistrarUsuario}>
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
        {/* <Campo
          placeholder={'confirmar_senha'}
          valor={data.confirmar_senha}
          setValor={handleChange('confirmar_senha')}
          tipo={'password'}
        /> */}

        {/* <Botao>Criar Conta</Botao> */}
        <button
          className='bg-button border-none py-[0.5rem] px-[2rem]'
          type='submit'>
          Criar Conta
        </button>
      </form>
    </PaginaPadrao>
  )
}
