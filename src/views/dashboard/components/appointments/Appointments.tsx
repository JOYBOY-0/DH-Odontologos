import { Button } from '@/common/button/Button'
import { DropDown, DropItem } from '@/common/drop-down'
import { Input } from '@/common/input/Input'
import { LoadSpinner } from '@/common/load-spinner/LoadSpinner'
import { useDataContext } from '@/context/dataContext'
import { FetchStatus, useFetchData } from '@/hooks/useFetchData'
import { Patient, Appointment, Dentist, AppointmentPost  } from '@/models/index'
import { EmptyAppointment, EmptyAppointmentPost } from '@/models/mockups/EmptyAppointment'
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, {  useState } from 'react'
import { FetchError } from '../messages/FetchError'
import { NoResults } from '../messages/NoResults'
import { DashboardForm } from '../modal/DashboardForm'
import  { AppointmentCard }  from './AppointmentCard'
import { AppointmentFormFields } from './AppointmentFormFields'

export const Appointments = () => {

  const {
    appointmentStatus,
    appointments,
    addAppointment,
    updateAppointment,
    deleteAppointment
  } = useDataContext()
  
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({asc : true, property : 'nombre'})

    // takes the search input and removes the spaces
    const trimmedSearch = search.trim().split(/\s+/);

    const filter = (turno : Appointment, word : string) => {
        return (turno.paciente.nombre.toLowerCase().includes(word.toLowerCase())
        || turno.paciente.apellido.toLowerCase().includes(word.toLowerCase())
        || turno.odontologo.nombre.toString().includes(word.toLowerCase())
        || turno.odontologo.apellido.toLowerCase().includes(word.toLowerCase())
        )
    }

    const filteredAppointments = appointments?.filter((turno) => {
        let match = false;
        trimmedSearch.forEach((word) => {
          match = match || filter(turno, word);
        })
        return match
    })    

    // const sortedResult = sortDentists(filteredDentists, sort.asc, sort.property);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [modalValues, setModalValues] = useState(EmptyAppointment)


    const turnoCreate : AppointmentPost = {
        paciente_id : modalValues.paciente.id,
        odontologo_id : modalValues.odontologo.id,
        fecha : modalValues.fecha,
    }

    const handleCreate = (e : any) => {
        e.preventDefault()
        addAppointment('http://localhost:8080/turnos', turnoCreate)
        setOpenModal(false)
        // reset modal values
        setModalValues(EmptyAppointment)
    }

    const handleDelete = (id : number) => {
        deleteAppointment(`http://localhost:8080/turnos/${id}`)
    }

    const handleEditModal = (turno : Appointment) => {
        setModalValues(turno)
        setOpenModal(false)
        setOpenEditModal(true)
    }
    
    const handleEdit = (id : number) => {
        updateAppointment(`http://localhost:8080/turnos/`, modalValues)
        setModalValues(EmptyAppointment)
        setOpenEditModal(false)
        setOpenModal(false)
    }

    return (

        <>  
            <DashboardForm
                open={openModal}
                setOpen={setOpenModal}
                title="Nuevo turno"
                onSubmit={handleCreate}
            > 
                <AppointmentFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(EmptyAppointment)}}
                />
            </DashboardForm>
            <DashboardForm
                open={openEditModal}
                setOpen={setOpenEditModal}
                title="Editar turno"
                onSubmit={(e) => {e.preventDefault(); handleEdit(modalValues.id)}}
            > 
                <AppointmentFormFields
                    data={modalValues}
                    setData={setModalValues}
                    onReset={(e:any) => {e.preventDefault(); setModalValues(EmptyAppointment)}}
                />
            </DashboardForm>

            <nav className="pt-2 pb-4 flex items-center justify-between flex-wrap ">
                <div className="flex items-center mx-4">
                    <MagnifyingGlassIcon className='h-8 mr-2 font-bold text-primary' />
                    <Input
                        className='w-96'
                        placeholder='Buscar turno'
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
                            <p className='mr-2'>Fecha</p>
                        </li>
                    </DropItem>
                    <DropItem>
                        <li className='flex items-center py-1'>
                            <ArrowUpIcon className='h-4 mr-2' />
                            <p className='mr-2'>Fecha</p>
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
                    <p>Nuevo turno</p>
                </Button>           
            </nav>

            <ul className='w-full flex flex-col mb-auto odd:bg-greyLight2/20'>

            {appointmentStatus === FetchStatus.LOADING && <LoadSpinner className='m-auto' />}

            {appointmentStatus === FetchStatus.ERROR && <FetchError className='m-auto' />}
    
                {appointmentStatus === FetchStatus.SUCCESS &&   
                    (filteredAppointments.length > 0 ? 

                    filteredAppointments.map((turno : Appointment, i) => (
                        <AppointmentCard
                            key={i}
                            data={turno}
                            deleteAppointment={() => handleDelete(turno.id)}
                            editAppointment={() => handleEditModal(turno)}
                        />
                    )) : <NoResults  className='m-auto' />)
                }
            </ul>
        </>
  )
}
