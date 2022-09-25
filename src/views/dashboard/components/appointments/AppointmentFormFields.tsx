import { Button } from '@/common/button/Button'
import { Datalist, DatalistItem } from '@/common/datalist'
import { Input } from '@/common/input/Input'
import { useDataContext } from '@/context/dataContext'
import { Appointment, AppointmentPost } from '@/models'
import React, {FC} from 'react'

export type PatientFormFieldsProps = {
    data : Appointment,
    setData : (prop : any) => void,
    onReset : (e : any) => void,
}

export const AppointmentFormFields : FC<PatientFormFieldsProps> = ({
  data,
  setData,
  onReset,
}) => {

    const {
        patients,
        dentists,
    } = useDataContext();

  return (
    <>

    <Input
        label="Fecha"
        type='date'
        value={data.fecha}
        onChange={(e) => setData({...data, fecha : e.target.value})}
        
    />

    <Datalist
        onChange={(e) => setData({...data, paciente : e})}
        data={patients}
        value={data.paciente}
        label="Seleccione un paciente"
        resultRenderer= {(item : any, i : number) => (
            <DatalistItem key={i} name={`${item.apellido} ${item.nombre}`} value={item} />
        )}
    />

    <Datalist
        onChange={(e) => setData({...data, odontologo : e})}
        data={dentists}
        value={data.odontologo}
        label="Seleccione un odontologo"
        resultRenderer= {(item : any, i : number) => (
            <DatalistItem key={i} name={`${item.apellido} ${item.nombre}`} value={item} />
        )}
    />
    

    {/* <div className='grid grid-cols-4 w-full gap-4 items-stretch justify-end'>
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
    </div> */}
    
    <div className='ml-auto my-4 gap-4 flex w-full items-center justify-end'>
        <Button
            className='min-w-[30%]'
            onClick={onReset}
            type='reset'
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
