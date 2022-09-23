import { Button } from '@/common/button/Button'
import { Appointment } from '@/models'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type appointmentCardProps = {
    data : Appointment,
    className?: string,
    deleteAppointment : () => void,
    editAppointment : (id : number) => void
}

export const AppointmentCard : FC<appointmentCardProps> = ({
  className, 
  data, 
  deleteAppointment,
  editAppointment
}) => {
  return (
    <div className='flex justify-between items-start
    p-4 rounded-md' >
        <div className="flex flex-col items-start justify-center 
        text-slate-600 gap-2 font-semibold">
          <h4>
            adasd
          </h4>
          <p className="text-sm text-greyDark2">
            <span className='text-primary'>DNI: </span>
            asdas
            </p>
        </div>
        <div className="flex flex-col items-end justify-center 
        text-slate-600 gap-2 ml-auto">
          <p>
            sada
          </p>
          <p className="text-sm text-greyDark2">
            dasdasdasd
          </p>
        </div>
        <div className="flex items-end justify-center 
        text-slate-600 gap-4 ml-10 pl-8 border-l-2 border-greyLight2">
          <Button secondary paddding='p-3' 
            onClick={editAppointment}
          >
            <PencilIcon className='h-6 w-6' />
          </Button>
          <Button secondary paddding='p-3' 
            onClick={deleteAppointment}
          >
            <TrashIcon className='h-6 w-6' />
          </Button>
        </div>
    </div>
  )
}
