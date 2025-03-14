import { ComponentPropsWithoutRef } from 'react'

import { Card, Typography } from '@/components'

import s from './Iconography.module.scss'

import { Icon } from './iconography.mock'

type iconListProps = {
  icons: Icon[]
}

export const Iconography = ({ icons }: iconListProps) => {
  return (
    <Card className={s.card}>
      {icons.map(el => {
        return (
          <div className={s.container} key={el.name}>
            <IconBox component={el.component} />
            <Typography as={'span'} className={s.title} variant={'small'}>
              {el.name}
            </Typography>
          </div>
        )
      })}
    </Card>
  )
}

type IconBoxProps = ComponentPropsWithoutRef<'div'> & Omit<Icon, 'name'>

const IconBox = ({ component, ...rest }: IconBoxProps) => {
  return (
    <div className={s.box} {...rest}>
      {component}
    </div>
  )
}
