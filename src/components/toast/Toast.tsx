import { ComponentPropsWithoutRef } from 'react'
import { Id, ToastContainer, ToastContentProps, ToastOptions, toast } from 'react-toastify'

import { Button, Typography } from '@/components'
import { TOASTER_AUTO_CLOSE_DELAY } from '@/constants'
import { CloseOutlineIcon } from '@/icons'
import clsx from 'clsx'

import '@/styles/_toastify.scss'
import 'react-toastify/dist/ReactToastify.css'

import s from './Toast.module.scss'

export type ToastProps = {
  text: string
  variant?: 'error' | 'success'
} & Partial<ToastContentProps>

export const defaultToastOptions: ToastOptions = {
  autoClose: TOASTER_AUTO_CLOSE_DELAY,
  closeButton: false,
  hideProgressBar: true,
  pauseOnHover: true,
  position: 'bottom-left',
}

export const toaster = (myProps: ToastProps, toastProps?: ToastOptions): Id =>
  toast(<CustomToast {...myProps} />, { ...defaultToastOptions, ...toastProps })

export const CustomToast = ({ closeToast, text, variant = 'success' }: ToastProps) => {
  return (
    <div className={clsx(s.container, s[variant])}>
      <Typography variant={'regular_16'}>{text}</Typography>
      <Button onClick={closeToast} variant={'icon'}>
        <CloseOutlineIcon />
      </Button>
    </div>
  )
}

type CustomToastContainerProps = ComponentPropsWithoutRef<typeof ToastContainer>

export const CustomToastContainer = (props: CustomToastContainerProps) => {
  return <ToastContainer draggable newestOnTop {...props} />
}
