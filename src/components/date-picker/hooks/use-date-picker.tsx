import { ChangeEvent, useEffect, useId, useState } from 'react'
import { DateRange } from 'react-day-picker'

import { CalendarIcon, CalendarOutlineIcon } from '@/icons'
import clsx from 'clsx'
import { format, isValid, parse } from 'date-fns'

import s from '../date-picker-single/DatePicker.module.scss'

type UseDatePickerArgs = {
  defaultValue?: Date
  defaultValueRange?: DateRange
  disabled?: boolean
  errorText?: string
  onSelectRangeDate?: (date: DateRange | undefined) => void
  onSelectSingleDate?: (date: Date | undefined) => void
}

export const useDatePicker = ({
  defaultValue,
  disabled,
  errorText,
  onSelectRangeDate,
  onSelectSingleDate,
}: UseDatePickerArgs) => {
  const [isOpen, setIsOpen] = useState(false)
  const [month, setMonth] = useState(new Date())
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue?.toLocaleDateString() : ''
  )
  const id = useId()

  useEffect(() => {
    if (defaultValue) {
      dayPickerSingleHandler(defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  const iconCN = clsx(s.icon, errorText && s.error, disabled && s.disabled)

  const triggerIcon = isOpen ? (
    <CalendarIcon className={iconCN} tabIndex={1} />
  ) : (
    <CalendarOutlineIcon className={iconCN} tabIndex={1} />
  )

  const inputSingleDateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    setInputValue(newValue)

    const parsedDate = parse(newValue, 'dd/MM/yyyy', new Date())

    if (isValid(parsedDate)) {
      onSelectSingleDate?.(parsedDate)
      setMonth(parsedDate)
    } else {
      onSelectSingleDate?.(undefined)
    }
  }

  const inputRangeDateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    setInputValue(newValue)

    const [start, end] = newValue.split(' - ').map(date => parse(date, 'dd/MM/yyyy', new Date()))

    if (start && isValid(start) && isValid(end)) {
      onSelectRangeDate?.({ from: start, to: end })
      setMonth(start)
    } else {
      onSelectRangeDate?.(undefined)
    }
  }

  function dayPickerSingleHandler(date: Date | undefined) {
    if (!date) {
      setInputValue('')
      onSelectSingleDate?.(undefined)
    } else {
      onSelectSingleDate?.(date)
      setInputValue(format(date, 'dd/MM/yyyy'))
    }
    setIsOpen(false)
  }

  function dayPickerRangeHandler(date: DateRange | undefined) {
    if (!date) {
      setInputValue('')
      onSelectRangeDate?.(undefined)
    } else {
      const { from, to } = date
      let formattedValue = ''

      if (from && !to) {
        formattedValue = format(from, 'dd/MM/yyyy') + ' - ' + 'choose end date'
      } else if (from && to) {
        formattedValue = format(from, 'dd/MM/yyyy') + ' - ' + format(to, 'dd/MM/yyyy')
      }

      setInputValue(formattedValue)
      onSelectRangeDate?.(date)
    }
  }

  return {
    dayPickerRangeHandler,
    dayPickerSingleHandler,
    id,
    inputRangeDateChangeHandler,
    inputSingleDateChangeHandler,
    inputValue,
    isOpen,
    month,
    setIsOpen,
    setMonth,
    triggerIcon,
  }
}
