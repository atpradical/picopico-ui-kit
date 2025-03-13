import { DateRange, Locale, PropsRange } from 'react-day-picker'

import { Button, Popover, Typography } from '@/components'
import { Calendar, useDatePicker } from '@/components/date-picker'
import { Content, Trigger } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'

import s from '../date-picker-single/DatePicker.module.scss'

export type DatePickerRangeProps = {
  classNameContainer?: string
  disabled?: boolean
  errorText?: string
  isRequired?: boolean
  label?: string
  locale?: Locale
  onSelect: (date: DateRange | undefined) => void
  placeHolder?: string
  selected?: DateRange | undefined
} & Omit<PropsRange, 'mode'>

export const DatePickerRange = ({
  classNameContainer,
  disabled,
  errorText,
  isRequired,
  label,
  onSelect,
  placeHolder = 'Pick a date',
  selected,
  ...rest
}: DatePickerRangeProps) => {
  const { id, isOpen, setIsOpen, triggerIcon } = useDatePicker({
    disabled,
    errorText,
  })

  return (
    <div className={clsx(s.conatainer, classNameContainer)}>
      <Typography as={'label'} grey htmlFor={id} isRequired={isRequired} variant={'regular_14'}>
        {label}
      </Typography>
      <Popover modal onOpenChange={setIsOpen} open={isOpen}>
        <Trigger asChild className={s.trigger} disabled={disabled} title={'open calendar'}>
          <Button className={clsx(s.button, errorText && s.error)} id={id} variant={'icon'}>
            {renderDateText(selected, placeHolder)}
            {triggerIcon}
          </Button>
        </Trigger>
        <Content align={'start'} className={s.popoverContent}>
          <Calendar autoFocus mode={'range'} onSelect={onSelect} selected={selected} {...rest} />
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

const renderDateText = (selected: DateRange | undefined, placeHolder: string) => {
  if (selected?.from) {
    if (selected.to) {
      return (
        <>
          {format(selected.from, 'P')} - {format(selected.to, 'P')}
        </>
      )
    }

    return format(selected.from, 'P')
  }

  return <span>{placeHolder}</span>
}
