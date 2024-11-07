import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import clsx from 'clsx'

import s from './ToggleGroup.module.scss'

type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
type ToggleGroupRef = ElementRef<typeof ToggleGroupPrimitive.Root>

const ToggleGroup = forwardRef<ToggleGroupRef, ToggleGroupProps>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root className={clsx(s.group, className)} ref={ref} {...props} />
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
type ToggleGroupItemRef = ElementRef<typeof ToggleGroupPrimitive.Item>

const ToggleGroupItem = forwardRef<ToggleGroupItemRef, ToggleGroupItemProps>(
  ({ className, ...props }, ref) => {
    return <ToggleGroupPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props} />
  }
)

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
