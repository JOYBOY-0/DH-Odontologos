import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
    children? : React.ReactNode,
    className? : string,
    button : string

}

export const DropDown : FC<Props> = (props) => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div className='group'>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 
          text-sm font-medium text-primary group-hover:text-primaryDark 
          focus:outline-none focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75">
            {props.button}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 
              text-primary group-hover:text-primaryDark"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 
          origin-top-right divide-y divide-greyLight2 
          rounded-md bg-greyLight1 shadow-lg overflow-hidden
          
           focus:outline-none box__standard">
            {props.children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}