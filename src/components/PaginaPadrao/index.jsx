import { useEffect, useState } from 'react'
import { Loader } from '../Loadear'

export const PaginaPadrao = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    <>
      {
      /*   loading ?
          <>
            <Loader />
          </>
          : */
          <>{children}</>
      }
    </>
  )
}
