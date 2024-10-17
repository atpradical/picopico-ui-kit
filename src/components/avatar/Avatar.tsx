import { ComponentPropsWithoutRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

type AvatarProps = {
  name?: string
  size?: 'l' | 'm' | 's' | 'xs'
  src?: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = ({ className, name, size = 'm', src, ...rest }: AvatarProps) => {
  const classNames = {
    fallback: s.fallback,
    image: s.avatar_img,
    root: clsx(s.root, s[size], className),
  }

  //@ts-ignore
  const fallbackTitle = name?.[0].toUpperCase()

  return (
    <AvatarPrimitive.Root className={classNames.root} {...rest}>
      <AvatarPrimitive.Image alt={'avatar'} className={classNames.image} src={src ?? ''} />
      <AvatarPrimitive.Fallback className={classNames.fallback}>
        {fallbackTitle}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}