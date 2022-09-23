import { Button } from '@/common/button/Button'
import { Input } from '@/common/input/Input'
import { Appointment, Patient } from '@/models'
import React, {FC} from 'react'

export type PatientFormFieldsProps = {
    data : Appointment,
    setData : (prop : any) => void,
    onReset : () => void,
}

export const PatientFormFields : FC<PatientFormFieldsProps> = ({
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
        label='DNI'
        value={data.dni}
        onChange={(e) => setData({ ...data, dni: e.target.value })}
    />

    <div className='grid grid-cols-4 w-full gap-4 items-stretch justify-end'>
        <Input
            required
            wrapperClassName='col-span-3'
            label='Calle'
            value={data.domicilio.calle}
            onChange={(e) => setData({ ...data, domicilio: { ...data.domicilio, calle: e.target.value } })}
        />
        <Input
            required
            label='Numero'
            value={data.domicilio.numero}
            onChange={(e) => setData({ ...data, domicilio: { ...data.domicilio, numero: e.target.value } })}
/>
    </div>
    <div className='flex w-full gap-4 items-stretch justify-end'>
        <Input
            required
            label='Localidad'
            value={data.domicilio.localidad}
            onChange={(e) => setData({ ...data, domicilio: { ...data.domicilio, localidad: e.target.value } })}
        />
        <Input
            required
            label='Provincia'
            value={data.domicilio.provincia}
            onChange={(e) => setData({ ...data, domicilio: { ...data.domicilio, provincia: e.target.value } })}
        />
    </div>
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
