import React, { FC, ReactElement } from 'react'
import { HTMLAttributes } from 'react'
import './loadSpinner.css'


export const LoadSpinner : FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={`loader ${props.className}`}></div>
  )
}
