import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ScrollArea, ScrollBar, Typography } from '@/components'
import { ArrowIosDownOutlineIcon } from '@/icons'
import * as RDXS from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

export type OptionsValue = {
  icon?: ReactNode
  option: string
  value: string
}
export type SelectProps = {
  className?: string
  label?: string
  options?: OptionsValue[]
  placeholder?: string
  showScroll?: boolean
} & ComponentPropsWithoutRef<typeof RDXS.Root>
export const Select = forwardRef<ElementRef<typeof RDXS.Trigger>, SelectProps>(
  (
    {
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      options = [],
      placeholder,
      showScroll = false,
      value,
      ...rest
    },
    ref
  ) => {
    const mappedOptions = options?.map((item, index) => (
      <RDXS.SelectItem className={s.selectItem} key={item.value + index} value={item.value}>
        <RDXS.ItemText asChild>
          <div className={s.option}>
            {item.icon}
            {item.option}
          </div>
        </RDXS.ItemText>
      </RDXS.SelectItem>
    ))

    return (
      <div>
        <RDXS.Root
          defaultValue={defaultValue}
          disabled={disabled}
          onValueChange={onValueChange}
          value={value}
          {...rest}
        >
          {label && (
            <Typography as={'label'} className={clsx(disabled && s.disabled)} grey>
              {label}
            </Typography>
          )}
          <RDXS.Trigger className={clsx(s.trigger, className)} ref={ref}>
            <RDXS.Value placeholder={placeholder} />
            <RDXS.Icon asChild>
              <ArrowIosDownOutlineIcon className={s.icon} />
            </RDXS.Icon>
          </RDXS.Trigger>
          <RDXS.Portal>
            <RDXS.Content className={s.content} position={'popper'}>
              {showScroll ? (
                <ScrollArea className={s.scrollAreaRoot}>
                  <RDXS.Viewport>
                    <RDXS.SelectGroup>{mappedOptions}</RDXS.SelectGroup>
                  </RDXS.Viewport>
                  <ScrollBar />
                </ScrollArea>
              ) : (
                <RDXS.Viewport>
                  <RDXS.SelectGroup>{mappedOptions}</RDXS.SelectGroup>
                </RDXS.Viewport>
              )}
            </RDXS.Content>
          </RDXS.Portal>
        </RDXS.Root>
      </div>
    )
  }
)
