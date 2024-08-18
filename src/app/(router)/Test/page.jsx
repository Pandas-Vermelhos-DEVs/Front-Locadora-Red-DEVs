'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '@/app/lib/api'
import Botao from '@/components/Botao/Botao'
import Campo from '@/components/Campo/Campo'

export default function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/Register', data)
      console.log(response)
    } catch (error) {
      console.error('Erro ao registrar:', error)
    }
  }

  return (
    <>
      <form
        className={'flex flex-col justify-between items-center h-[350px]'}
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className={'text-2xl font-bold'}>Cadastro</h1>
        <Campo
          placeholder={'Email'}
          {...register('email', { required: 'Email é obrigatório' })}
          tipo={'email'}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Campo
          placeholder={'Senha'}
          {...register('senha', { required: 'Senha é obrigatória' })}
          tipo={'password'}
        />
        {errors.senha && <span>{errors.senha.message}</span>}
        {/* <Campo
          placeholder={'Confirmar Senha'}
          {...register('confirmar_senha', { required: 'Confirmação de senha é obrigatória' })}
          tipo={'password'}
        />
        {errors.confirmar_senha && <span>{errors.confirmar_senha.message}</span>} */}
        <Botao type='submit'>Criar Conta</Botao>
      </form>
    </>
  )
}
