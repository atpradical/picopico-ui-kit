import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components'

import s from './Spinner.module.scss' // Импорт SCSS модуля

type SpinnerProps = {
  /**
   * Цвет спиннера.
   * @default 'currentColor'
   */
  color?: string
  /**
   * Лейбл для спиннера*/
  label?: string
  /**
   * Размер спиннера (в пикселях).
   * @default 24
   */
  size?: number
  /**
   * Скорость анимации (в секундах).
   * @default 0.75
   */
  speed?: number
} & ComponentPropsWithoutRef<'div'>

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, color = 'currentColor', label, size = 24, speed = 1, ...props }, ref) => {
    // Динамически задаем CSS-переменные
    const spinnerStyle = {
      '--spinner-speed': `${speed}s`, // Передаем скорость анимации в CSS
      color,
      height: size,
      width: size,
    } as CSSProperties

    return (
      <div className={s.container}>
        <div
          aria-label={'Loading'}
          className={`${s.spinner} ${className || ''}`} // Используем класс из SCSS модуля
          ref={ref}
          role={'status'}
          style={spinnerStyle}
          {...props}
        >
          {/* SVG для спиннера */}
          <svg fill={'none'} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
            <circle cx={'12'} cy={'12'} r={'10'} />
          </svg>
        </div>
        {label && (
          <Typography as={'span'} variant={'small'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'
