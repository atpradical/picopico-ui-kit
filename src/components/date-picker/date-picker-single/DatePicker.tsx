import { ElementRef, forwardRef } from 'react'
import { Locale, PropsSingle } from 'react-day-picker'

import { Calendar, Typography, useDatePicker } from '@/components'
import { TextField } from '@/components/text-field'
import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover'
import clsx from 'clsx'

import s from './DatePicker.module.scss'

export type DatePickerProps = {
  defaultValue?: Date | undefined
  disabled?: boolean
  errorText?: string
  isRequired?: boolean
  label?: string
  locale?: Locale
  onSelectSingleDate: (date: Date | undefined) => void
  selected?: Date | undefined
} & Omit<PropsSingle, 'mode'>

type DatePickerRef = ElementRef<typeof TextField>

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  (
    { defaultValue, disabled, errorText, isRequired, label, onSelectSingleDate, selected, ...rest },
    ref
  ) => {
    const {
      dayPickerSingleHandler,
      id,
      inputSingleDateChangeHandler,
      inputValue,
      isOpen,
      month,
      setIsOpen,
      setMonth,
      triggerIcon,
    } = useDatePicker({
      defaultValue,
      disabled,
      errorText,
      onSelectSingleDate,
    })

    return (
      <div className={s.container}>
        <Typography as={'label'} grey htmlFor={id} isRequired={isRequired} variant={'regular_14'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          <TextField
            autoComplete={'off'}
            className={clsx(errorText && s.error)}
            disabled={disabled}
            errorText={errorText}
            onChange={inputSingleDateChangeHandler}
            ref={ref}
            value={inputValue}
          />
          <Root onOpenChange={setIsOpen} open={isOpen}>
            <Trigger className={s.trigger} disabled={disabled} id={id} title={'open calendar'}>
              {triggerIcon}
            </Trigger>
            <Portal>
              <Content align={'start'} avoidCollisions sideOffset={-16}>
                <Calendar
                  mode={'single'}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={dayPickerSingleHandler}
                  selected={selected}
                  {...rest}
                />
              </Content>
            </Portal>
          </Root>
        </div>
      </div>
    )
  }
)
