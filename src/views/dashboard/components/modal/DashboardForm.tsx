import { Box } from '@/common/box/Box'
import { Icon } from '@/common/icon/Icon'
import { TransitionModal } from '@/common/transition-modal/TransitionModal'
import { XCircleIcon } from '@heroicons/react/24/solid'
import React, {FC} from 'react'

export type DashboardFormProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  onSubmit: (params : any) => void;
  children: React.ReactNode;
  className?: string;
}

export const DashboardForm : FC<DashboardFormProps> = ({
  open, 
  setOpen,
  title,
  children,
  onSubmit,
  className,

}) => {
  return (
    <TransitionModal
      show={open}
    >
        <Box 
            className={`w-full max-w-[95%] md:max-w-2xl bg-greyLight1
            flex flex-col items-center justify-center ${className}`}
            paddding='p-4 md:p-8 lg:p-12'
        >
            <div className='flex items-center justify-between py-2 w-full max-w-md'>
                <h1 className="text-xl font-light text-slate-600">
                    {title}
                </h1>
                <Icon onClick={() => setOpen(false)}>
                    <XCircleIcon className='h-10 w-10' />
                </Icon>
            </div>
            <form
                onSubmit={onSubmit}
                className='flex flex-col gap-4 max-w-md w-full'
            >
              {children}
            </form>
        </Box>
    </TransitionModal>
  )
}
