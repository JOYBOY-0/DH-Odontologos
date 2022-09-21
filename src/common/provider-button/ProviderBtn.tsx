import { Provider } from '@supabase/supabase-js'
import React, { FC } from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  // children: React.ReactNode,
  onClick?: () => void,
  backgroundColor?: string,
  iconClass?: string,
  iconSrc?: string,
  provider: Provider,
  className?: string,
}

export const ProviderBtn: FC<Props> = ({
  // children,
  onClick,
  provider,
  backgroundColor = "FFF",
  iconClass = "w-full h-full p-3",
  iconSrc,
  className,
  ...props
}) => {
  return (
    <button
      style={{ backgroundColor }}
      onClick={onClick}
      className={`${className}
       rounded-lg shadow
    transition-all duration-300 ease-in-out 
    cursor-pointer hover:shadow-lg`}
    >
      <img className={iconClass} src={iconSrc} alt={`Login with ${provider}`} />
    </button>
  )
}

export default ProviderBtn