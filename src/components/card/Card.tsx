import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  variant?: 'default' | 'semi-transparent' | 'transparent'
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'div', className, variant = 'default', ...rest } = props
    const cn = clsx(s.card, s[variant], className)

    return <Component className={cn} ref={ref} {...rest} />
  }
)
