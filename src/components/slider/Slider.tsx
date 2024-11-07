import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './Slider.module.scss'

type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

type SliderRef = ElementRef<typeof SliderPrimitive.Root>

const Slider = forwardRef<SliderRef, SliderProps>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root className={clsx(s.root, className)} ref={ref} {...props}>
    <SliderPrimitive.Track className={s.track}>
      <SliderPrimitive.Range className={s.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={s.thumd} />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
