import {  Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

type Props = {
    children? : React.ReactNode,
    show : boolean
}

export const TransitionModal : FC<Props> = (props) => {
  return (
    <Transition
        show={props.show}
        className="fixed inset-0 z-50 "
        // as={Fragment}
    >
        <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100 delay-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div 
                className='fixed top-0 left-0 w-full h-full
                flex items-center justify-center backdrop-blur-[1px]
                 bg-greyLight1/50 z-50 overflow-y-auto'
            >
                {props.children}
            </div>
        </Transition.Child>
        
    </Transition>
    
  )
}
