/* eslint-disable */
export default function Campo({ tipo = 'text', placeholder, valor, setValor }) {
  return (
    <>
      <input
        className={`Campo`}
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </>
  )
}
