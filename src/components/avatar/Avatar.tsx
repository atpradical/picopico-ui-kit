import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components'
import { ImageOutlineIcon } from '@/icons'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

type AvatarProps = {
  showFallback?: boolean
  showUserName?: boolean
  size?: 'l' | 'm' | 's' | 'xs'
  src?: string
  userName?: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = ({
  className,
  showFallback = false,
  showUserName = false,
  size = 'm',
  src,
  userName,
  ...rest
}: AvatarProps) => {
  const classNames = {
    fallback: s.fallback,
    image: s.avatar_img,
    root: clsx(s.root, s[size], className),
  }

  //@ts-ignore
  const fallbackTitle = userName?.[0].toUpperCase()

  return (
    <div className={s.container}>
      <AvatarPrimitive.Root className={classNames.root} {...rest}>
        <AvatarPrimitive.Image alt={'avatar'} className={classNames.image} src={src ?? ''} />
        <AvatarPrimitive.Fallback className={classNames.fallback}>
          {showFallback ? (
            fallbackTitle
          ) : (
            <ImageOutlineIcon
              className={clsx(size === 's' ? s.fallBackSmallIcon : s.fallBackIcon)}
            />
          )}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
      {showUserName && <Typography>{userName}</Typography>}
    </div>
  )
}
