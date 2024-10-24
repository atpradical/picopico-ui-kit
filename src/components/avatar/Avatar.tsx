import { ComponentPropsWithoutRef } from 'react'

import { ImageOutlineIcon } from '@/icons'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

type AvatarProps = {
  name?: string
  showFallback?: boolean
  size?: 'l' | 'm' | 's' | 'xs'
  src?: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = ({
  className,
  name,
  showFallback = false,
  size = 'm',
  src,
  ...rest
}: AvatarProps) => {
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
        {showFallback ? fallbackTitle : <ImageOutlineIcon className={s.fallBackIcon} />}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
