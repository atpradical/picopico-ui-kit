import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './TextArea.module.scss'

export type TextAreaProps = {
  counterLimit?: number
  counterValue?: number
  errorText?: string
  isRequired?: boolean
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

type TextAreaRef = ElementRef<'textarea'>

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
  const { className, counterLimit, counterValue, disabled, errorText, isRequired, label, ...rest } =
    props
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
        className={clsx(s.textarea, disabled && s.disabled, !!errorText && s.error, className)}
        id={id}
        ref={ref}
        {...rest}
      />
      <div className={s.errorCounterWrapper}>
        {!!counterLimit && (
          <Typography className={s.counter} variant={'small'}>
            {`${counterValue ?? '0'}/${counterLimit}`}
          </Typography>
        )}
        {!!errorText && (
          <Typography className={s.errorText} variant={'error'}>
            {errorText}
          </Typography>
        )}
      </div>
    </div>
  )
})
