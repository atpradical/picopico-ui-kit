import { useCallback, useEffect, useState } from 'react'
import { PropsSingle } from 'react-day-picker'

import { Button, Calendar, Popover, Typography, useDatePicker } from '@/components'
import { Content, Trigger } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'
import { enUS, ru } from 'react-day-picker/locale'

import s from './DatePicker.module.scss'

export type DatePickerProps = {
  classNameContainer?: string
  defaultValue?: Date
  disabled?: boolean
  errorText?: string
  isRequired?: boolean
  label?: string
  localeString?: string
  onSelect: (date?: Date) => void
  placeHolder?: string
  selected?: Date | undefined
} & Omit<PropsSingle, 'mode'>

export const DatePicker = ({
  classNameContainer,
  defaultValue,
  disabled,
  errorText,
  isRequired,
  label,
  localeString,
  onSelect,
  placeHolder = ' Pick a date',
  selected,
  ...rest
}: DatePickerProps) => {
  const { id, isOpen, setIsOpen, triggerIcon } = useDatePicker({
    disabled,
    errorText,
  })

  const [month, setMonth] = useState<Date | undefined>(selected)

  // Синхронизируем месяц с выбранной датой
  useEffect(() => {
    if (selected) {
      setMonth(selected)
    }
  }, [selected])

  const localeCode = localeString === 'ru' ? ru : enUS

  const selectDateAndClosePopover = useCallback(
    (date?: Date) => {
      onSelect(date)
      setIsOpen(false)
    },
    [onSelect, setIsOpen]
  )

  return (
    <div className={clsx(s.conatainer, classNameContainer)}>
      <Typography as={'label'} grey htmlFor={id} isRequired={isRequired} variant={'regular_14'}>
        {label}
      </Typography>
      <Popover onOpenChange={setIsOpen} open={isOpen}>
        <Trigger asChild className={s.trigger} disabled={disabled} title={'open calendar'}>
          <Button className={clsx(s.button, errorText && s.error)} id={id} variant={'icon'}>
            {selected ? format(selected, 'P', { locale: localeCode }) : <span>{placeHolder}</span>}
            {triggerIcon}
          </Button>
        </Trigger>
        <Content align={'start'} className={s.popoverContent}>
          <Calendar
            autoFocus
            locale={localeCode}
            mode={'single'}
            month={month} // Управляем текущим месяцем
            onMonthChange={setMonth} // Обновляем месяц при изменении
            onSelect={selectDateAndClosePopover}
            selected={selected}
            {...rest}
          />
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
