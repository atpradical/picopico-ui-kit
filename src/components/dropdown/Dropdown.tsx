import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './Dropdown.module.scss'

const DropdownMenu = DropdownMenuPrimitive.Root

type DropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
type DropdownMenuTriggerRef = ElementRef<typeof DropdownMenuPrimitive.Trigger>

const DropdownMenuTrigger = forwardRef<DropdownMenuTriggerRef, DropdownMenuTriggerProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Trigger className={clsx(s.trigger, className)} ref={ref} {...props} />
  )
)

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
type DropdownMenuContentRef = ElementRef<typeof DropdownMenuPrimitive.Content>

const DropdownMenuContent = forwardRef<DropdownMenuContentRef, DropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={clsx(s.content, className)}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
)

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
type DropdownMenuItemRef = ElementRef<typeof DropdownMenuPrimitive.Item>

const DropdownMenuItem = forwardRef<DropdownMenuItemRef, DropdownMenuItemProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props} />
  )
)

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
}
