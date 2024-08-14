import { IoMdClose } from 'react-icons/io'
import { LuSkipBack } from 'react-icons/lu'
import Link from 'next/link'

export const Navegacao = ({ lastUrl, closeUrl }) => {
  return (
    <div className='flex justify-between w-[100%] px-8'>
      <Link href={lastUrl}>
        <LuSkipBack size={30} />
      </Link>
      <Link href={closeUrl}>
        <IoMdClose size={30} />
      </Link>
    </div>
  )
}
