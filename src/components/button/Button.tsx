import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'nb-outlined' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      className,
      fullWidth,
      type = 'button',
      variant = 'primary',
      ...rest
    } = props
    const cn = clsx(styles.button, styles[variant], fullWidth && styles.fullWidth, className)

    return <Component className={cn} ref={ref} type={type} {...rest} />
  }
)

Button.displayName = 'Button'
