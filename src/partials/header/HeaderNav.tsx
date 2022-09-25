import React, { useEffect, useState } from 'react'
import { Button } from '../../common/button/Button'
import { Section } from '../../common/Layout/Section'
import useScrollPosition from '../../hooks/useScrollPosition'
import { Link } from 'react-router-dom'
import { SideMenu } from './utils/SideMenu'
import { Logo } from '../../common/logo/Logo'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid/'
import { MenuNavLink } from './utils/MenuNavLink'
import { Icon } from '../../common/icon/Icon'
export const HeaderNav = () => {
  
  const [open, setOpen] = useState(false)
  const {scrollPosition, scrollDown } = useScrollPosition();

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [open]);

  return (
  <>
    <div className={`fixed top-0 w-full font-primary 
      transition-all ease-in transform z-20 duration-300
      ${scrollPosition > 15 && ' bg-greyLight1 backdrop-blur-sm shadow-md'}
      ${scrollDown && !open ? 'md:-translate-y-1/4 md:opacity-0' : ''}`} 
    >

      <Section 
      yPadding='py-6'
      >
        <div className='flex justify-center md:justify-between items-center relative'>
        <a href='#hero-section'>
          <Logo className='text-xl cursor-pointer' />
        </a>
        <Button
          secondary
          onClick={() => setOpen(true)}
          className='absolute right-0 md:hidden px-1 py-1'
        >
          <Bars3Icon
            className='h-12'
          />
        </Button>
          <nav className='hidden md:flex justify-center items-center 
          font-primary text-lg text-slate-600 space-x-6 '>
              <MenuNavLink
                to='/'
                className=''
                activeClassName='font-semibold'
              >
                Home
              </MenuNavLink>
              <MenuNavLink
                to='/turnos'
                className=''
                activeClassName='font-semibold'
              >
                Turnos
              </MenuNavLink>
              <MenuNavLink
                to='/admin'
                className=''
                activeClassName='font-semibold'
              >
                Dashboard
              </MenuNavLink>
              <Button  >
                <Link to="/auth/login">
                Ingresar
                </Link>
              </Button>
          </nav>
        </div>
      </Section>
    </div>

    <SideMenu show={open}>
    <div className='flex flex-col items-center justify-between h-full w-full px-6'>
        <div className='flex justify-between items-center w-full'>
          <p className="relative uppercase text-5xl font-thin text-slate-500">
            menu
          </p>
          <button
            className='flex flex-col items-center justify-center space-y-1'
            onClick={() => setOpen(false)}
          >
          <Icon >
              <XCircleIcon className='h-12' />
            </Icon>
            <p className='text-lg font-semibold text-slate-600'>Close</p>
          </button>
        </div>
      <nav className='flex flex-col justify-center items-center 
      font-primary text-3xl text-slate-600 space-y-6 '>
        <MenuNavLink
          to='/'
          className=''
          activeClassName='font-semibold'
        >
          <span onClick={()=>setOpen(false)}>Home</span>
        </MenuNavLink>
        <MenuNavLink
          to='/turnos'
          className=''
          activeClassName='font-semibold'
        >
          <span onClick={()=>setOpen(false)}>Turnos</span>
        </MenuNavLink>
        <MenuNavLink
          to='/nosotros'
          className=''
          activeClassName='font-semibold'
        >
          <span onClick={()=>setOpen(false)}>Nosotros</span>
        </MenuNavLink>
        <Button 
          paddding='py-3 px-5' 
          onClick={()=>setOpen(false)}
        >
          <Link to="/auth/login">
            Ingresar
          </Link>
        </Button>
      </nav>

      <Logo dark={false} size="lg" className='h-20' />

    </div>
    </SideMenu>
  </>
  )
}
