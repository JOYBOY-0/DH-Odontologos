import React, { FC, MouseEvent  } from 'react'
import './icon.scss'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: any;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  paddding?: string;
  roundness?: string;
}

export const Icon : FC<IButtonProps> = ({
  children,
  className,
  onClick,
  paddding = "p-2",
  roundness = "rounded-full",
  ...props
}) => {
  return (
    <span 
      onClick={onClick}
      className={`icon__box transition-all ${paddding} ${roundness} ${className}`} 
      {...props}
    >
      {children}
      
    </span>
  )
}
