import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export type NavLinkProps = {
    to: string
    children: React.ReactNode
    className?: any
    activeClassName?: string
}


export const MenuNavLink : FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive } : any )  => isActive ? props.activeClassName : props.className }
    >
        {props.children}
    </NavLink>
  )
}
