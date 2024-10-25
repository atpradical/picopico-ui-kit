import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './ScrollArea.module.scss'

type ScrollAreaProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
type ScrollAreaRef = ElementRef<typeof ScrollAreaPrimitive.Root>

const ScrollArea = forwardRef<ScrollAreaRef, ScrollAreaProps>(
  ({ children, className, ...props }, ref) => (
    <ScrollAreaPrimitive.Root className={clsx(s.root, className)} ref={ref} {...props}>
      <ScrollAreaPrimitive.Viewport className={s.viewport}>{children}</ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
)

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

type ScrollBarProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
type ScrollBarRef = ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>

const ScrollBar = forwardRef<ScrollBarRef, ScrollBarProps>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={clsx(s.scrollbar, className)}
      orientation={orientation}
      ref={ref}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={s.thumb} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
)

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
