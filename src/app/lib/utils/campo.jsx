import { useState } from 'react'

export function InputHandle() {
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
}
