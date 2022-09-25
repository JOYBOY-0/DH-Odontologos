import { Button } from '@/common/button/Button'
import { DropDown, DropItem } from '@/common/drop-down'
import { Input } from '@/common/input/Input'
import { LoadSpinner } from '@/common/load-spinner/LoadSpinner'
import { useDataContext } from '@/context/dataContext'
import { FetchStatus, useFetchData } from '@/hooks/useFetchData'
import { Patient } from '@/models'
import { EmptyPatient } from '@/models/mockups/EmptyPatient'
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { FetchError } from '../messages/FetchError'
import { NoResults } from '../messages/NoResults'
import { DashboardForm } from '../modal/DashboardForm'
import  {PatientCard}  from './PatientCard'
import { PatientFormFields } from './PatientFormFields'

export const Patients = () => {

  const {
    patientStatus,
    patients,
    getPatients,
    addPatient,
    updatePatient,
    deletePatient
  } = useDataContext()

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({asc : true, property : 'nombre'})

    // takes the search input and removes the spaces
    const trimmedSearch = search.trim().split(/\s+/);

    const filter = (patient : Patient, word : string) => {
    return (patient.nombre.toLowerCase().includes(word.toLowerCase())
    || patient.apellido.toLowerCase().includes(word.toLowerCase())
    || patient.dni.toString().includes(word.toLowerCase())
    || patient.email.toLowerCase().includes(word.toLowerCase())
    )
  }

    const filteredPatients = patients?.filter((patient) => {
        let match = false;
        trimmedSearch.forEach((word) => {
          match = match || filter(patient, word);
        })

        return match
    })    

    // const sortedResult = sortDentists(filteredDentists, sort.asc, sort.property);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);


    const [modalValues, setModalValues] = useState(EmptyPatient)

    const handleCreate = (e : any) => {
        e.preventDefault()
        addPatient('http://localhost:8080/pacientes', modalValues)
        setOpenModal(false)
        // reset modal values
        setModalValues(EmptyPatient)
        // update data
        getPatients('http://localhost:8080/pacientes');
        
    }

    const handleDelete = (id : number) => {
        deletePatient(`http://localhost:8080/pacientes/${id}`)
    }

    const handleEditModal = (patient : Patient) => {
        setModalValues(patient)
        setOpenModal(false)
        setOpenEditModal(true)
    }
    
    const handleEdit = (id : number) => {
        console.log(modalValues)
        updatePatient(`http://localhost:8080/pacientes/`, modalValues)
        setModalValues(EmptyPatient)
        setOpenEditModal(false)
        setOpenModal(false)
        getPatients('http://localhost:8080/pacientes');

    }

    return (

        <>  
            <DashboardForm
                className='my-[200px]'
                open={openModal}
                setOpen={setOpenModal}
                title="Nuevo Paciente"
                onSubmit={handleCreate}
            > 
                <PatientFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(EmptyPatient)}}
                />
            </DashboardForm>
            <DashboardForm
                className='mt-[30vh]'
                open={openEditModal}
                setOpen={setOpenEditModal}
                title="Editar paciente"
                onSubmit={(e) => {e.preventDefault(); handleEdit(modalValues.id)}}
            > 
                <PatientFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(EmptyPatient)}}
                />
            </DashboardForm>

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
                    onClick={() => setOpenModal(true)}
                    className='flex items-center justify-center ml-auto'
                    paddding='px-4 py-3'
                >
                    <PlusCircleIcon className='h-6 mr-2 ' />
                    <p>Crear paciente</p>
                </Button>           
            </nav>

            <ul className='w-full flex flex-col mb-auto odd:bg-greyLight2/20'>

            {patientStatus === FetchStatus.LOADING && <LoadSpinner className='m-auto' />}

            {patientStatus === FetchStatus.ERROR && <FetchError className='m-auto' />}
    
                {patientStatus === FetchStatus.SUCCESS &&   
                    (filteredPatients.length > 0 ? 

                    filteredPatients.map((patient : Patient, i) => (
                        <PatientCard
                            key={i}
                            data={patient}
                            deletePatient={() => handleDelete(patient.id)}
                            editPatient={() => handleEditModal(patient)}
                        />
                    )) : <NoResults  className='m-auto' />)
                }
            </ul>
        </>
  )
}
