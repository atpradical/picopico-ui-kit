import { PropsSingle } from 'react-day-picker'

import { Button, Calendar, Popover, Typography, useDatePicker } from '@/components'
import { Content, Trigger } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'

import s from './DatePicker.module.scss'

export type DatePickerProps = {
  defaultValue?: Date
  disabled?: boolean
  errorText?: string
  isRequired?: boolean
  label?: string
  onSelect: (date: Date | undefined) => void
  selected?: Date | undefined
} & Omit<PropsSingle, 'mode'>

export const DatePicker = ({
  defaultValue,
  disabled,
  errorText,
  isRequired,
  label,
  onSelect,
  selected,
  ...rest
}: DatePickerProps) => {
  const { id, isOpen, setIsOpen, triggerIcon } = useDatePicker({
    disabled,
    errorText,
  })

  return (
    <div className={s.container}>
      <Typography as={'label'} grey htmlFor={id} isRequired={isRequired} variant={'regular_14'}>
        {label}
      </Typography>
      <Popover onOpenChange={setIsOpen} open={isOpen}>
        <Trigger asChild className={s.trigger} disabled={disabled} title={'open calendar'}>
          <Button className={clsx(s.button, errorText && s.error)} id={id} variant={'icon'}>
            {selected ? format(selected, 'P') : <span>Pick a date</span>}
            {triggerIcon}
          </Button>
        </Trigger>
        <Content align={'start'} className={s.popoverContent}>
          <Calendar autoFocus mode={'single'} onSelect={onSelect} selected={selected} {...rest} />
        </Content>
      </Popover>
      {!!errorText && (
        <Typography as={'span'} variant={'error'}>
          {errorText}
        </Typography>
      )}
    </div>
  )
}
