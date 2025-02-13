import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { Typography } from '@/components'
import { CheckmarkOutlineIcon } from '@/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  error?: string
  isRequired?: boolean
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, disabled, error, isRequired, label, ...rest } = props
  const checkboxId = useId()

  return (
    <div>
      <div className={s.container}>
        <RadixCheckbox.Root
          className={clsx(s.root, error && s.error, className)}
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator className={clsx(s.indicator, disabled && s.disabled)}>
            <CheckmarkOutlineIcon className={clsx(s.icon, disabled && s.disabledIcon)} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.label, disabled && s.disabled)}
            htmlFor={checkboxId}
            isRequired={isRequired}
            variant={'regular_14'}
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        <Typography as={'span'} variant={'error'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
