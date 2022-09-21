import React, { FC, PropsWithChildren } from 'react'
import { HeaderNav } from '../../partials/header/HeaderNav'

export const Base : FC<PropsWithChildren>= (props) => {
    
  return (
    <div className="antialiased overflow-hidden base-wrapper min-h-screen">
        <HeaderNav />
        {props.children}
    </div>
  )
}
