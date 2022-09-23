import { Button } from '@/common/button/Button'
import { Input } from '@/common/input/Input'
import { Dentist } from '@/models/Dentist'
import React, {FC} from 'react'

export type DentistFormFieldsProps = {
    data : Dentist,
    setData : (prop : any) => void,
    onReset : () => void,
}

export const DentistFormFields : FC<DentistFormFieldsProps> = ({
  data,
  setData,
  onReset,
}) => {
  return (
    <>
    <Input
        required
        label='Nombre'
        value={data.nombre}
        onChange={(e) => setData({ ...data, nombre: e.target.value })}
    />
    <Input
        required
        label='Apellido'
        value={data.apellido}
        onChange={(e) => setData({ ...data, apellido: e.target.value })}
    />
    <Input
        required
        label='Matricula'
        value={data.matricula}
        onChange={(e) => setData({ ...data, matricula: e.target.value })}
    />
    <Input
        required
        label='Email'
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
    />
    <div className='ml-auto my-4 gap-4 flex w-full items-center justify-end'>
        <Button
            className='min-w-[30%]'
            onClick={onReset}
            secondary
        >
            Resetear
        </Button>
        <Button
            type='submit'
            className='min-w-[30%]'
        >
            Enviar
        </Button>
    </div>
    </>
  )
}
