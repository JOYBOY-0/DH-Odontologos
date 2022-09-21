import React from 'react'
import { Box } from '../../common/box/Box'
import { Clock } from '../../common/design-elements/clock/Clock'
import UsersDraw from '../../common/design-elements/user/UsersDraw'
import { Base } from '../../common/Layout/Base'
import { Section } from '../../common/Layout/Section'

export const Home = () => {
  return (
    
    <Base>
      <Section 
      wrapperClassName=''
        yPadding="py-10"
      >
        
      </Section>
      <Section 
        yPadding="py-10"
        className='flex flex-col md:flex-row justify-center items-center gap-10'
      >
        <Box 
        paddding='p-6'
          className="flex flex-col items-center justify-start 
          w-full max-w-xs cursor-pointer" 
        >
          <h1 className="text-2xl font-light text-slate-600">Nuevo turno</h1>
          <p className='text-slate-500 mb-4'>Ingreso para usuarios</p>
          <Clock className="scale-75" />
        </Box>
        <Box 
        paddding='p-6'
          className="flex flex-col items-center justify-start 
          w-full max-w-xs cursor-pointer" 
        >
          <h1 className="text-2xl font-light text-slate-600">Ingresar</h1>
          <p className='text-slate-500 mb-4'>Accede a tu cuenta</p>
          <UsersDraw
            className='scale-75'
          />
        </Box>
      </Section>
    </Base>
  )
}
