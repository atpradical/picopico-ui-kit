import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  ripple?: boolean
  variant?: 'icon' | 'link' | 'nb-outlined' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      className,
      fullWidth,
      ripple = true,
      type = 'button',
      variant = 'primary',
      ...rest
    } = props
    const cn = clsx(s.button, s[variant], fullWidth && s.fullWidth, className, ripple && s.ripple)

    return <Component className={cn} ref={ref} type={type} {...rest} />
  }
)

Button.displayName = 'Button'
