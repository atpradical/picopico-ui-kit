import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

import { Spinner } from '../spinner'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  isLoading?: boolean
  ripple?: boolean
  spinnerProps?: ComponentProps<typeof Spinner>
  variant?: 'icon' | 'link' | 'nb-outlined' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      disabled,
      fullWidth,
      isLoading = false,
      ripple = true,
      spinnerProps,
      type = 'button',
      variant = 'primary',
      ...rest
    } = props
    const cn = clsx(
      s.button,
      s[variant],
      fullWidth && s.fullWidth,
      className,
      ripple && s.ripple,
      isLoading && s.isLoading
    )

    return (
      <Component className={cn} disabled={disabled || isLoading} ref={ref} type={type} {...rest}>
        {isLoading ? <Spinner {...spinnerProps} /> : <>{children}</>}
      </Component>
    )
  }
)

Button.displayName = 'Button'
