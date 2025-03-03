import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'

import s from './Separator.module.scss'

const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, decorative = true, orientation = 'horizontal', ...props }, ref) => (
  <SeparatorPrimitive.Root
    className={clsx(
      s.separator,
      orientation === 'horizontal' ? s.horizontal : s.vertical,
      className
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
))

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
