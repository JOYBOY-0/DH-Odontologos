import React, { FC, MouseEvent  } from 'react'
import './box.scss'

export interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: any;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  paddding?: string;
  roundness?: string;
  inset? : boolean;
}

export const Box : FC<IBoxProps> = ({
  children,
  className,
  onClick,
  paddding = "p-4",
  roundness = "rounded-xl",
  inset,
  ...props
}) => {
  return (
    <div 
      onClick={onClick}
      className={`${inset ? 'box-inner' : 'box-default'} transition-all 
      ${paddding} ${roundness} ${className}`} 
      {...props}
    >
      {children}
      
    </div>
  )
}
