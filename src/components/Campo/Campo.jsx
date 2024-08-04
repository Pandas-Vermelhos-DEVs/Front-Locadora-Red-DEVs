/* eslint-disable */
export default function Campo({ tipo = 'text', placeholder, senha, novaSenha, setValor }) {
  return (
    <>
      <input
        className={`Campo`}
        type={tipo}
        placeholder={placeholder}
        value={novaSenha}
        onChange={(e) => setValor(e.target.value)}
      />
    </>
  )
}
