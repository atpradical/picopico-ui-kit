import { useId, useState } from 'react'

import { CalendarIcon, CalendarOutlineIcon } from '@/icons'
import clsx from 'clsx'

import s from '@/components/date-picker/date-picker-single/DatePicker.module.scss'

type UseDatePickerArgs = {
  disabled?: boolean
  errorText?: string
}

export const useDatePicker = ({ disabled, errorText }: UseDatePickerArgs) => {
  const [isOpen, setIsOpen] = useState(false)

  const id = useId()

  const iconCN = clsx(s.icon, errorText && s.error, disabled && s.disabled)

  const triggerIcon = isOpen ? (
    <CalendarIcon className={iconCN} />
  ) : (
    <CalendarOutlineIcon className={iconCN} />
  )

  return { id, isOpen, setIsOpen, triggerIcon }
}
