import { Box } from '@/common/box/Box'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Base } from '../../common/Layout/Base'
import { Section } from '../../common/Layout/Section'
import { Dentists } from './components/dentist/Dentists'
import { Patients } from './components/patients/Patients'
import { Tabs } from './components/tabs/Tabs'

export const Dasboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [{
    name: 'Pacientes',
    path: '/admin/pacientes'
    }, 
    {
      name: 'Odontologos',
      path: '/admin/odontologos'
    },
    {
      name: 'Calendario',
      path: '/admin/calendario'
    }
  ]

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin') {
      return navigate("/admin/pacientes");
    }
  
  }, [])
  

  
  

  return (
    <Base>
    <Section 
      wrapperClassName=''
        yPadding="py-24"
      >
        <section
        id='main-dashboard' 
        className='flex flex-col items-start justify-center'>
          <div className='flex justify-center items-center px-4 '>
            <Tabs 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />
          </div>
          <Box className='w-full min-h-[400px] bg-greyLight1 relative
          flex flex-col justify-start'>
            <Routes>
            <Route path='/pacientes' element={<Patients />} />
            <Route path='/odontologos' element={<Dentists />} />
            </Routes>
          </Box>
        </section>
      </Section>
    </Base>
  )
}
