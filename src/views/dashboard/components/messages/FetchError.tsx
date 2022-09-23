import { ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type Props = {
    className?: string
}

export const FetchError : FC<Props> = ({className}) => {
  return (
    <article className={`flex py-20 text-slate-600 ${className}`} >
        <ExclamationTriangleIcon className='h-10 w-10 ' />
        <div className='flex flex-col items-start justify-center ml-4'>
            <h3 className='text-xl'>Hubo un error</h3>
            <p className='text-sm'>Intente nuevamente en unos segundos.</p>
        </div>
    </article>
  )
}
