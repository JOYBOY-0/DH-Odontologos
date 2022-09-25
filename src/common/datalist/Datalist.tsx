import React, { Fragment, useState, FC } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import './datalist.scss'
type Props = {
  data: any[]
  label?: string,
  tag?: boolean,
  className?: string,
  placeholder?: string,
  name?: string,
  id? : string,
  value? : any,
  onChange : (e: any) => void,
  resultRenderer? : (item: any, i: number) => JSX.Element,
}

export const Datalist : FC<Props> = ({
  data = [],
  label,
  tag,
  className,
  id,
  name,
  placeholder,
  value = '',
  onChange,
  resultRenderer,
  ...props
}) => {

  const [query, setQuery] = useState('')

  const filteredTag =
    query === ''
      ? data
      : data.filter((item) =>
            (item.apellido
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))) ||
            (item.nombre
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, '')))
            )
      

  return (
    <div className="font-primary group w-full relative">
      <Combobox value={value ? `${value.nombre} ${value.apellido}` : query} onChange={onChange} >
        <div className="relative w-full">
          <div className="flex flex-col-reverse items-start w-full ">
            <Combobox.Input
              className={`w-full p-3 
              datalist__standard rounded-lg
              ${className}`}
              // displayValue={value ? `${value.nombre} ${value.apellido}` : query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
            />
            <Combobox.Button className="absolute bottom-3 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
            {label && 
              <label
                htmlFor={id}
                className={`${tag ? "ml-4 peer-focus:bg-devPink-600 bg-slate-500 rounded-t-lg px-4" : "mb-1.5" } 
                py-1 text-slate-500 uppercase `}
              >
                {label}
              </label>}
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options 
            className="absolute mt-2 max-h-60 w-full 
            overflow-auto rounded-md z-10 divide-y divide-greyLight2 
             bg-greyLight1 shadow-lg box__standard" >
              {filteredTag.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-slate-700 z-10">
                  Nothing found.
                </div>
              ) : (
                filteredTag.map((item, i) => (
                  resultRenderer ? (
                    resultRenderer(item, i)
                  ) : null
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
