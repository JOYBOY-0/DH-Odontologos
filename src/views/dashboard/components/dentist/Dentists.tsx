import { Button } from '@/common/button/Button'
import { DropDown, DropItem } from '@/common/drop-down'
import { Input } from '@/common/input/Input'
import { LoadSpinner } from '@/common/load-spinner/LoadSpinner'
import { FetchStatus, useFetchData } from '@/hooks/useFetchData'
import { Dentist } from '@/models/Dentist'
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { FetchError } from '../messages/FetchError'
import { NoResults } from '../messages/NoResults'
import { DashboardForm } from '../modal/DashboardForm'
import  {DentistCard}  from './DentistCard'
import { DentistFormFields } from './DentistFormFields'
import { useDataContext } from '@/context/dataContext'
export const Dentists = () => {

  const {
    dentistStatus,
    dentists,
    getDentists,
    addDentist,
    updateDentist,
    deleteDentist
  } = useDataContext()

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({asc : true, property : 'nombre'})


    // takes the search input and removes the spaces
    const trimmedSearch = search.trim().split(/\s+/);

    const filter = (dentist : Dentist, word : string) => {
    return (dentist.nombre.toLowerCase().includes(word.toLowerCase())
    || dentist.apellido.toLowerCase().includes(word.toLowerCase())
    || dentist.matricula.toString().includes(word.toLowerCase())
    || dentist.email.toLowerCase().includes(word.toLowerCase())
    )
  }

    const filteredDentists = dentists?.filter((dentist) => {
        let match = false;
        trimmedSearch.forEach((word) => {
          match = match || filter(dentist, word);
        })

        return match
    })    

    // const sortedResult = sortDentists(filteredDentists, sort.asc, sort.property);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const emptyDentist : Dentist = {
        id: 0,
        nombre: '',
        apellido: '',
        matricula: '',
        email : ''
    }

    const [modalValues, setModalValues] = useState(emptyDentist)

    const handleCreate = (e : any) => {
        e.preventDefault()
        addDentist('http://localhost:8080/odontologos', modalValues)
        setOpenModal(false)
        // reset modal values
        setModalValues(emptyDentist)
        
    }

    const handleDelete = (id : number) =>  {
        deleteDentist(`http://localhost:8080/odontologos/${id}`)
    }

    const handleEditModal = (dentist : Dentist) => {
        setModalValues(dentist)
        setOpenModal(false)
        setOpenEditModal(true)
    }
    
    const handleEdit = (id : number) => {
        console.log(modalValues)
        updateDentist(`http://localhost:8080/odontologos/`, modalValues)
        setModalValues(emptyDentist)
        setOpenEditModal(false)
        setOpenModal(false)
    }

    return (

        <>  
            <DashboardForm
                open={openModal}
                setOpen={setOpenModal}
                title="Nuevo Odontologo"
                onSubmit={handleCreate}
            > 
                <DentistFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(emptyDentist)}}
                />
            </DashboardForm>
            <DashboardForm
                open={openEditModal}
                setOpen={setOpenEditModal}
                title="Editar Odontologo"
                onSubmit={(e) => {e.preventDefault(); handleEdit(modalValues.id)}}
            > 
                <DentistFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(emptyDentist)}}
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
                    <p>Crear odontologo</p>
                </Button>           
            </nav>

            <ul className='w-full flex flex-col mb-auto odd:bg-greyLight2/20'>

            {dentistStatus === FetchStatus.LOADING && <LoadSpinner className='m-auto' />}

            {dentistStatus === FetchStatus.ERROR && <FetchError className='m-auto' />}
    
                {dentistStatus === FetchStatus.SUCCESS &&   
                    (filteredDentists.length > 0 ? 

                    filteredDentists.map((dentist : Dentist, i) => (
                        <DentistCard
                            key={i}
                            data={dentist}
                            deleteDentist={() => handleDelete(dentist.id)}
                            editDentist={() => handleEditModal(dentist)}
                        />
                    )) : <NoResults  className='m-auto' />)
                }
            </ul>
        </>
  )
}
