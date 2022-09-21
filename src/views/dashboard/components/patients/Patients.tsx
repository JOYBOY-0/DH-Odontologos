import { Button } from '@/common/button/Button'
import { DropDown, DropItem } from '@/common/drop-down'
import { Input } from '@/common/input/Input'
import { Patient } from '@/models'
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { PatientCard } from './PatientCard'

export const Patients = () => {

    const [search, setSearch] = useState('')

    const patientList : Array<Patient> = [
        {
            id: 1,
            nombre: 'John',
            apellido: 'Doe',
            dni: 20242425,
            email : 'demo-email@email.com',
            direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            registerDate: '2021-01-01'
        },
        {
            id: 2,
            nombre: 'John',
            apellido: 'Doe',
            dni: 20242425,
            email : 'demo-email@email.com',
            direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            registerDate: '2021-01-01'
        },
        {
            id: 3,
            nombre: 'John',
            apellido: 'Doe',
            dni: 20242425,
            email : 'demo-email@email.com',
            direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            registerDate: '2021-01-01'
        }
    ]
    
    return (

        <>
            <nav className="pt-2 pb-4 flex items-center justify-between flex-wrap ">
                <div className="flex items-center mx-4">
                    <MagnifyingGlassIcon className='h-8 mr-2 font-bold text-primary' />
                    <Input
                        className='w-96'
                        placeholder='Buscar paciente'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <DropDown
                    button='Ordenar'
                >
                    <DropItem>
                        <li className='flex items-center py-1'>
                            <ArrowDownIcon className='h-4 mr-2' />
                            <p className='mr-2'>Nombre</p>
                        </li>
                    </DropItem>
                    <DropItem>
                        <li className='flex items-center py-1'>
                            <ArrowUpIcon className='h-4 mr-2' />
                            <p className='mr-2'>Nombre</p>
                        </li>
                    </DropItem>
                    <DropItem>
                        <li className='flex items-center py-1'>
                            <ArrowDownIcon className='h-4 mr-2' />
                            <p className='mr-2'>Apellido</p>
                        </li>
                    </DropItem>
                    <DropItem>
                        <li className='flex items-center py-1'>
                            <ArrowUpIcon className='h-4 mr-2' />
                            <p className='mr-2'>Apellido</p>
                        </li>
                    </DropItem>
                </DropDown>
                <Button 
                    className='flex items-center justify-center ml-auto'
                    paddding='px-4 py-3'
                >
                    <PlusCircleIcon className='h-6 mr-2 ' />
                    <p>Crear paciente</p>
                </Button>           
            </nav>

            <ul className='w-full flex flex-col'>
                {
                    patientList.map((patient, i) => (
                        <PatientCard
                            alterBackground={i % 2 === 0}
                            key={patient.id}
                            data={patient}
                        />
                    ))
                }
            </ul>
        </>
  )
}
