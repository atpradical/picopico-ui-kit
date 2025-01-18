import { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { Dropdown, DropdownOption } from 'react-day-picker'

import { ScrollArea, ScrollBar } from '@/components'
import { ArrowIosDownOutlineIcon } from '@/icons'
import * as RDXS from '@radix-ui/react-select'

import s from '@/components/select/Select.module.scss'

type CalendarSelectProps = {
  options?: DropdownOption[]
} & ComponentPropsWithoutRef<typeof Dropdown>

export const CalendarSelect = ({ onChange, options, value }: CalendarSelectProps) => {
  const mappedOptions = options?.map((item, index) => (
    <RDXS.SelectItem
      className={s.selectItem}
      disabled={item.disabled}
      key={item.value + index}
      textValue={item.label}
      value={String(item.value)}
    >
      <RDXS.ItemText asChild>
        <div className={s.option}>{item.label}</div>
      </RDXS.ItemText>
    </RDXS.SelectItem>
  ))

  const handleValueChange = (newValue: string) => {
    // Создаем объект события с полем target, содержащим value тк Radix UI не дает доступа к нативному event.
    // Реализую максимально простой вариант Имитации события (вместо dispatchEvent => new Event(event, 'target', {
    //       value: { value: newValue },
    //       writable: false,
    //     }) )
    //
    const event = {
      target: {
        value: newValue,
      },
    }

    // Вызываем onChange с имитированным событием
    if (onChange) {
      onChange(event as unknown as ChangeEvent<HTMLSelectElement>)
    }
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <RDXS.Root
        defaultValue={String(value)}
        onValueChange={handleValueChange}
        value={String(value)}
      >
        <RDXS.Trigger className={s.trigger}>
          <RDXS.Value />
          <RDXS.Icon asChild>
            <ArrowIosDownOutlineIcon className={s.icon} />
          </RDXS.Icon>
        </RDXS.Trigger>
        <RDXS.Portal>
          <RDXS.Content className={s.content} position={'popper'}>
            <ScrollArea className={s.scrollAreaRoot}>
              <RDXS.Viewport>
                <RDXS.SelectGroup>{mappedOptions}</RDXS.SelectGroup>
              </RDXS.Viewport>
              <ScrollBar />
            </ScrollArea>
          </RDXS.Content>
        </RDXS.Portal>
      </RDXS.Root>
    </div>
  )
}
