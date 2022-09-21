import { Menu } from '@headlessui/react'
import React, {FC} from 'react'

type Props = {
    children? : React.ReactNode,
    className?: string,
    activeClassName?: string,
    inactiveClassName?: string,
    onClick?: () => void
}

export const DropItem : FC<Props> = ({
    className = "flex w-full items-center px-2 py-2 text-sm hover:bg-greyLight2/30",
    activeClassName,
    inactiveClassName,
    onClick,
    ...props
    }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                onClick={onClick}
                className={`${ active ? activeClassName :  inactiveClassName } ${className}`}
                >
                    {props.children}
                </button>
            )}
        </Menu.Item>
    )
}
