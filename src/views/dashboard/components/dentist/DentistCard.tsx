import { Button } from '@/common/button/Button'
import { Dentist } from '@/models/Dentist'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type dentistCardProps = {
    data : Dentist,
    className?: string,
    deleteDentist : () => void,
    editDentist : (id : number) => void

}


export const DentistCard : FC<dentistCardProps> = ({
  className, 
  data, 
  deleteDentist,
  editDentist
}) => {
  return (
    <div className="flex justify-between items-start
    p-4 rounded-md bg-greyLight2/20" >
        <div className="flex flex-col items-start justify-center 
        text-slate-600 gap-2">
          <h4>
            {data.apellido} {data.nombre}
          </h4>
          <p className="text-sm text-greyDark2">
            <span className='text-primary'>MATRICULA: </span>
            {data.matricula}</p>
        </div>
        <div className="flex flex-col items-end justify-center 
        text-slate-600 gap-2 ml-auto">
          <p>{data.email}</p>
          <p className="text-sm text-greyDark2">
            <span className='text-primary'>ID: </span>
            {data.id}</p>
        </div>
        <div className="flex items-end justify-center 
        text-slate-600 gap-4 ml-10 pl-8 border-l-2 border-greyLight2">
          <Button secondary paddding='p-3' 
           onClick={editDentist}
          >
            <PencilIcon className='h-6 w-6' />
          </Button>
          <Button secondary paddding='p-3' 
            onClick={deleteDentist}
          >
            <TrashIcon className='h-6 w-6' />
          </Button>
        </div>
    </div>
  )
}
