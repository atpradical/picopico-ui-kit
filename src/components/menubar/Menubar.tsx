'use client'

import { ComponentProps, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as MenubarPrimitive from '@radix-ui/react-menubar'
import clsx from 'clsx'

import s from './Menubar.module.scss'

function MenubarMenu({ ...props }: ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({ ...props }: ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({ ...props }: ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({ ...props }: ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({ ...props }: ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot={'menubar-sub'} {...props} />
}

const Menubar = forwardRef<
  ElementRef<typeof MenubarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root className={className} ref={ref} {...props} />
))

Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger className={className} ref={ref} {...props} />
))

MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarContent = forwardRef<
  ElementRef<typeof MenubarPrimitive.Content>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ align = 'start', alignOffset = -4, className, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      align={align}
      alignOffset={alignOffset}
      className={clsx(s.content, className)}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </MenubarPrimitive.Portal>
))

MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.Item>,
  {
    inset?: boolean
  } & ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props} />
))

MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarLabel = forwardRef<
  ElementRef<typeof MenubarPrimitive.Label>,
  {
    inset?: boolean
  } & ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label className={className} ref={ref} {...props} />
))

MenubarLabel.displayName = MenubarPrimitive.Label.displayName

export {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarSub,
  MenubarTrigger,
}
