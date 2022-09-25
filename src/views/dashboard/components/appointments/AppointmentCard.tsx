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

  const [year, month, day] = data.fecha.split('-');

  function getMonthName(monthNumber : string) {
    const date = new Date();
    date.setMonth(Number(monthNumber) - 1);
  
    return date.toLocaleString('en-US', { month: 'short' });
  }

  return (
    <div className='flex justify-between items-start
    p-4 rounded-md' >
      <div className="flex flex-col items-center justify-center 
        text-white font-semibold mr-4 bg-primary w-16 rounded-md p-1">
          <h4>
            {getMonthName(month)}
          </h4>
          <p className="text-xl text-greyDark2">
            {day}
            </p>
        </div>
        <div className="flex flex-col items-start justify-center 
        text-slate-600 gap-2 font-semibold">
          <h4>
            {data.paciente.nombre} {data.paciente.apellido}
          </h4>
          <p className="text-sm text-greyDark2">
            <span className='text-primary'>Contacto: </span>
            {data.paciente.email}
            </p>
        </div>
        <div className="flex flex-col items-end justify-center 
        text-slate-600 gap-2 ml-auto">
          <p>
            {data.odontologo.nombre} {data.odontologo.apellido}
          </p>
          <p className="text-sm text-greyDark2">
            <span className='text-primary'>MATRICULA: </span>
            {data.odontologo.matricula}
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
