import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import clsx from 'clsx'

import s from './Toggle.module.scss'

type ToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
type ToggleRef = ElementRef<typeof TogglePrimitive.Root>

const Toggle = forwardRef<ToggleRef, ToggleProps>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root className={clsx(s.toggle, className)} ref={ref} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
