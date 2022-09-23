import React, { FC, MouseEvent  } from 'react'
import './button.scss'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: any;
  secondary?: boolean;
  onClick?: (params : any) => void;
  paddding?: string;
}

export const Button : FC<IButtonProps> = (props) => {
  return (
    <button 
      onClick={props.onClick}
      className={`btn ${props.secondary ? 'btn__secondary' : 'btn__primary'} 
      ${props.paddding ? props.paddding : 'py-2 px-4'}
       rounded-xl transition-all ${props.className}`} 
    >
      {props.children}
      
    </button>
  )
}
