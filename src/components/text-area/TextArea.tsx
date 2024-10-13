import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './TextArea.module.scss'

type TextAreaProps = {
  error?: string
  label?: string
  isRequired?: boolean
} & ComponentPropsWithoutRef<'textarea'>

type TextEreaRef = ElementRef<'textarea'>

export const TextArea = forwardRef<TextEreaRef, TextAreaProps>((props, ref) => {
  const { disabled, className, isRequired, error, label, ...rest } = props
  const id = useId()
  return (
    <div className={s.container}>
      {label && (
        <Typography
          htmlFor={id}
          as={'label'}
          grey
          className={clsx(disabled && s.disabled)}
          isRequired={isRequired}
        >
          {label}
        </Typography>
      )}
      <textarea
        id={id}
        className={clsx(s.textarea, disabled && s.disabled, !!error && s.error, className)}
        ref={ref}
        {...rest}
      />
      {!!error && (
        <Typography className={s.errorText} variant={'error'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
