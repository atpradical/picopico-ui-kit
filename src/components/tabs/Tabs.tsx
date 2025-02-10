import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RDXT from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

type TabsRootProps = ComponentPropsWithoutRef<typeof RDXT.Root>
type TabsRootRef = ElementRef<typeof RDXT.Root>

const TabsRoot = forwardRef<TabsRootRef, TabsRootProps>((props, ref) => (
  <RDXT.Root ref={ref} {...props} />
))

TabsRoot.displayName = RDXT.Root.displayName

type TabsListProps = ComponentPropsWithoutRef<typeof RDXT.List>
type TabsListRef = ElementRef<typeof RDXT.List>

const TabsList = forwardRef<TabsListRef, TabsListProps>(({ className, ...props }, ref) => (
  <RDXT.List className={clsx(s.list, className)} ref={ref} {...props} />
))

TabsList.displayName = RDXT.List.displayName

type TabsTriggerProps = ComponentPropsWithoutRef<typeof RDXT.Trigger>
type TabsTriggerRef = ElementRef<typeof RDXT.Trigger>

const TabsTrigger = forwardRef<TabsTriggerRef, TabsTriggerProps>(({ className, ...props }, ref) => (
  <RDXT.Trigger className={clsx(s.trigger, s.ripple, className)} ref={ref} {...props} />
))

TabsTrigger.displayName = RDXT.Trigger.displayName

type TabsContentProps = ComponentPropsWithoutRef<typeof RDXT.Content>
type TabsContentRef = ElementRef<typeof RDXT.Content>

const TabsContent = forwardRef<TabsContentRef, TabsContentProps>((props, ref) => (
  <RDXT.Content ref={ref} {...props} />
))

TabsContent.displayName = RDXT.Content.displayName

export { TabsContent, TabsList, TabsRoot, TabsTrigger }
