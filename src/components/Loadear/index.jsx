/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

export const Loader = () => {
  return (
    <div
      className={'flex items-center justify-center relative animate-flutuar'}>
      <span
        className={
          'rounded-full p-[0.7rem]  bg-gradient-to-b from-first_color_gradientl to-second_color_gradientl absolute animate-spin'
        }>
        <div className={'w-[235px] h-[235px] bg-[#2d2d30] rounded-full'}></div>
      </span>
      <span className={'relative'}>
        <Image src='/logo_carregamento.svg' width={244} height={479} />
      </span>
    </div>
  )
}
