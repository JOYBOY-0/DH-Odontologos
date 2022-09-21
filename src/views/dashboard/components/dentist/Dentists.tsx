import { Button } from '@/common/button/Button'
import { DropDown, DropItem } from '@/common/drop-down'
import { Input } from '@/common/input/Input'
import { useFetchData } from '@/hooks/useFetchData'
import { Dentist } from '@/models/Dentist'
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { NoResults } from '../messages/NoResults'
import  {DentistCard}  from './DentistCard'

export const Dentists = () => {

  const {
    loading,
    error,
    data,
    fetchData
  } = useFetchData()

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({asc : true, property : 'nombre'})



    const dentistList : Array<Dentist> = [
        {
            id: 1,
            nombre: 'John',
            apellido: 'Doe',
            matricula: 20242425,
            email : 'demo-email@email.com',
            // direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            // registerDate: '2021-01-01'
        },
        {
            id: 2,
            nombre: 'John',
            apellido: 'Doe',
            matricula: 20242425,
            email : 'demo-email@email.com',
            // direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            // registerDate: '2021-01-01'
        },
        {
            id: 3,
            nombre: 'John',
            apellido: 'Doe',
            matricula: 20242425,
            email : 'demo-email@email.com',
            // direccion: 'Calle n29, ciudad nombre Ciudad, Pais',
            // registerDate: '2021-01-01'
        }

    ]

    // takes the search input and removes the spaces
    const trimmedSearch = search.trim().split(/\s+/);

    const filter = (dentist : Dentist, word : string) => {
    return (dentist.nombre.toLowerCase().includes(word.toLowerCase())
    || dentist.apellido.toLowerCase().includes(word.toLowerCase())
    || dentist.matricula.toString().includes(word)
    || dentist.email.toLowerCase().includes(word.toLowerCase())
    )
  }

    const filteredDentists = dentistList.filter((dentist) => {
        let match = false;
        trimmedSearch.forEach((word) => {
          match = match || filter(dentist, word);
        })

        return match
    })

        // defines 4 types of sorting: asc by name, desc by name, asc by id, desc by id
      // const sortDentists = (dentists : Dentist[], asc : boolean, property : string) => {
      //   return dentists.sort((a : any, b : any) => {
      //     if (asc) {
      //       if (a[property] < b[property]) {
      //         return -1
      //       }
      //       if (a[property] > b[property]) {
      //         return 1
      //       }
      //       return 0
      //     } else {
      //       if (a[property] > b[property]) {
      //         return -1
      //       }
      //       if (a[property] < b[property]) {
      //         return 1
      //       }
      //       return 0
      //     }
      //   })
      // }

    // const sortedResult = sortDentists(filteredDentists, sort.asc, sort.property);

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error</div>
    }

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
                    filteredDentists.length > 0 ? 

                    filteredDentists.map((dentist, i) => (
                        <DentistCard
                            alterBackground={i % 2 === 0}
                            key={i}
                            data={dentist}
                        />
                    )) : <NoResults  className='m-auto' />
                }
            </ul>
        </>
  )
}
