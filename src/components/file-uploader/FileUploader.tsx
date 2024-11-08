import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components'
import clsx from 'clsx'

import s from './FileUploader.module.scss'

type FileUploaderProps = {
  accept: HTMLInputElement['accept'][]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<typeof Button>

export const FileUploader = ({
  accept,
  as = 'label',
  children,
  className,
  onChange,
  ...rest
}: FileUploaderProps) => {
  return (
    <Button as={as} {...rest} className={clsx(s.uploadButton, className)}>
      <input accept={accept.join(', ')} hidden onChange={onChange} type={'file'} />
      {children}
    </Button>
  )
}
