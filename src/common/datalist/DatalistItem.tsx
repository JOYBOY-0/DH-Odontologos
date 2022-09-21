import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import React, {FC} from 'react'

type Props = {
    className?: string,
    name? : string,
    icon? : string,
    activeClassName? : string,
    inactiveClassName? : string,
    id? : string,
    value? : any,
    onClick? : () => void,
}

export const DatalistItem : FC<Props> = ({
    className,
    activeClassName,
    inactiveClassName,
    name, 
    icon,
    id,
    value
}) => {
  return (
    <Combobox.Option
      className={`text-slate-100 bg-slate-600 relative 
      cursor-default select-none py-2 px-4
      hover:bg-slate-700 hover:text-white ${className}`}
      value={value}
    >
      <span
        className={`flex truncate `}
      >
        {icon && 
          <img src={icon} className="h-5 w-5 mr-3" aria-hidden="true" />
        }
        {name}
      </span>
    </Combobox.Option>
  )
}
