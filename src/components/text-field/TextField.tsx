import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useId,
  useState,
} from 'react'

import { Button, Typography } from '@/components'
import { CloseOutlineIcon, EyeOffOutlineIcon, EyeOutlineIcon, SearchOutlineIcon } from '@/icons'
import clsx from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  errorText?: string
  isRequired?: boolean
  label?: string
  onClear?: () => void
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

type TextFieldRef = ElementRef<'input'>

export const TextField = forwardRef<TextFieldRef, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    errorText,
    isRequired = false,
    label,
    onChange,
    onClear,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const id = useId()

  const isPassword = variant === 'password'
  const inputType = !showPassword && isPassword ? 'password' : 'text'
  const isSearch = variant === 'search'

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    setInputValue(e.currentTarget.value)
  }

  const clearInputHandler = () => {
    setInputValue('')
    onClear?.()
  }

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={s.container}>
      {label && (
        <Typography
          as={'label'}
          className={clsx(disabled && s.disabled)}
          grey
          htmlFor={id}
          isRequired={isRequired}
        >
          {label}
        </Typography>
      )}
      <div className={s.inputContainer}>
        {isSearch && <SearchOutlineIcon className={clsx(s.iconSearch, disabled && s.disabled)} />}
        <input
          className={clsx(
            s.input,
            s[variant],
            errorText && s.error,
            disabled && s.disabled,
            className
          )}
          disabled={disabled}
          id={id}
          onChange={inputChangeHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
          {...rest}
        />
        {isPassword && !!inputValue && (
          <Button
            className={clsx(
              s.passwordControl,
              errorText && s.error,
              disabled && s.disabled,
              s.showIcon
            )}
            disabled={disabled}
            onClick={showPasswordHandler}
            variant={'icon'}
          >
            {showPassword ? (
              <EyeOutlineIcon className={s.icon} />
            ) : (
              <EyeOffOutlineIcon className={s.icon} />
            )}
          </Button>
        )}
        {isSearch && !!inputValue && (
          <Button
            className={clsx(s.clearIcon, disabled && s.disabled)}
            disabled={disabled}
            onClick={clearInputHandler}
            variant={'icon'}
          >
            <CloseOutlineIcon className={s.icon} />
          </Button>
        )}
      </div>
      {!!errorText && (
        <Typography as={'span'} variant={'error'}>
          {errorText}
        </Typography>
      )}
    </div>
  )
})
