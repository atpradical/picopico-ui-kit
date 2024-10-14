import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  grey?: boolean
  isRequired?: boolean
  variant?:
    | 'badge'
    | 'bold_14'
    | 'bold_16'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'medium_14'
    | 'regular_14'
    | 'regular_16'
    | 'regular_link'
    | 'semi-bold_small'
    | 'small'
    | 'small_link'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p',
    className,
    grey,
    isRequired = false,
    variant = 'regular_14',
    ...rest
  } = props
  const cn = clsx(s[variant], grey && s.grey, isRequired && s.required, className)

  return <Component className={cn} {...rest} />
}
