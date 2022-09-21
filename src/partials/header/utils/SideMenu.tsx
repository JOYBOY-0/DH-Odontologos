import {  Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

type Props = {
    children? : React.ReactNode,
    show : boolean,
}

export const SideMenu : FC<Props> = (props) => {
  return (
    <Transition
        show={props.show}
        className="fixed inset-0 z-[1000]"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        // as={Fragment}
    >
        
        <div 
            className='fixed top-0 left-0 w-full h-full py-10 overflow-hidden
            flex items-center justify-center bg-greyLight1 bg-pattern-dark'
        >
            {props.children}
        </div>
    </Transition>
    
  )
}
