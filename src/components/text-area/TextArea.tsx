import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './TextArea.module.scss'

type TextAreaProps = {
  error?: string
  isRequired?: boolean
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

type TextEreaRef = ElementRef<'textarea'>

export const TextArea = forwardRef<TextEreaRef, TextAreaProps>((props, ref) => {
  const { className, disabled, error, isRequired, label, ...rest } = props
  const id = useId()

  return (
    <div className={s.container}>
      {label && (
        <Typography
          as={'label'}
          className={clsx(disabled && s.disabled)}
          grey
          htmlFor={id}
          isRequired={isRequired}
        >
          {label}
        </Typography>
      )}
      <textarea
        className={clsx(s.textarea, disabled && s.disabled, !!error && s.error, className)}
        id={id}
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
