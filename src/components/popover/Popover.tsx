import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import clsx from 'clsx'

import s from './Popover.module.scss'

const Popover = PopoverPrimitive.Root

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
type PopoverTriggerRef = ElementRef<typeof PopoverPrimitive.Trigger>

const PopoverTrigger = forwardRef<PopoverTriggerRef, PopoverTriggerProps>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Trigger className={clsx(s.trigger, className)} {...props} ref={ref} />
  )
)

const PopoverAnchor = PopoverPrimitive.Anchor
const PopoverArrow = PopoverPrimitive.Arrow

type PopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
type PopoverContentRef = ElementRef<typeof PopoverPrimitive.Content>

const PopoverContent = forwardRef<PopoverContentRef, PopoverContentProps>(
  ({ align = 'center', className, sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        className={clsx(s.content, className)}
        onTouchMove={e => e.stopPropagation()}
        onWheel={e => e.stopPropagation()}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
)

PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverAnchor, PopoverArrow, PopoverContent, PopoverTrigger }
