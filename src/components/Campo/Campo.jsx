/* eslint-disable */
export default function Campo({ tipo = 'text', placeholder, valor, setValor }) {
  return (
    <>
      <input
        className={'border-0 outline-0 h-[2.3rem] p-2 w-[300px] text-color_placeholder'}
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </>
  )
}
