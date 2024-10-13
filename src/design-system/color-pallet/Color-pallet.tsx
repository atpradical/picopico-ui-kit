import { ComponentPropsWithoutRef } from 'react'
import {
  ColorPallet,
  PalletCategory,
  PalletItem,
} from '@/design-system/color-pallet/color-pallet.mock.ts'
import { Card, Typography } from '@/components'

import s from './Color-pallet.module.scss'

type ColorPalletProps = {
  colors: ColorPallet
}

export const ColorPalette = ({ colors }: ColorPalletProps) => {
  const category = Object.keys(colors)

  return (
    <Card className={s.card} variant={'transparent'}>
      {category.map((el, index) => {
        const key = el + index
        const category = el as PalletCategory
        const categoryColors = colors[el as PalletCategory]

        return <Pallet category={category} key={key} categoryColors={categoryColors} />
      })}
    </Card>
  )
}

type PalletProps = {
  category: PalletCategory
  categoryColors: PalletItem[]
}

const Pallet = ({ category, categoryColors }: PalletProps) => {
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <Typography as={'h2'} className={s.title} variant={'h2'}>
          {title}
        </Typography>
      </div>
      {categoryColors.map(el => (
        <div className={s.colorContainer} key={el.id}>
          <ColorBox color={el.color} />
          <Typography className={s.text} style={{ color: el.color }} variant={'small'}>
            {el.color}
          </Typography>
          <Typography className={s.text} variant={'small'}>
            {el.id}
          </Typography>
        </div>
      ))}
    </div>
  )
}

type ColorBoxProps = ComponentPropsWithoutRef<'div'> & Omit<PalletItem, 'id'>

const ColorBox = ({ color, ...rest }: ColorBoxProps) => {
  return <div className={s.box} style={{ backgroundColor: color }} {...rest} />
}
