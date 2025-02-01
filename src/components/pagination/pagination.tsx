import { memo, useCallback, useMemo } from 'react'

import { Button, OptionsValue, Select, Typography } from '@/components'
import { DOTS, usePagination } from '@/components/pagination/hooks'
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '@/icons'
import clsx from 'clsx'

import s from './pagination.module.scss'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_SIBLING_COUNT = 1
const DEFAULT_TOTAL_COUNT = 1
const DEFAULT_SELECT_VALUE = '10'
const DEFAULT_TEXT_SHOW = 'Show'
const DEFAULT_TEXT_PER_PAGE = 'per page'

type Props = {
  className?: string
  currentPage: number
  defaultSelectValue?: string
  onNextPage?: () => void
  onPageChange?: (page: number) => void
  onPrevPage?: () => void
  onSelectValueChange?: (value: string) => void
  pageSize?: number
  selectOptions?: OptionsValue[]
  siblingCount?: number
  textPerPage?: string
  textShow?: string
  totalCount: number
}

export const Pagination = memo((props: Props) => {
  const {
    className,
    currentPage,
    defaultSelectValue = DEFAULT_SELECT_VALUE,
    onNextPage,
    onPageChange,
    onPrevPage,
    onSelectValueChange,
    pageSize = DEFAULT_PAGE_SIZE,
    selectOptions,
    siblingCount = DEFAULT_SIBLING_COUNT,
    textPerPage = DEFAULT_TEXT_PER_PAGE,
    textShow = DEFAULT_TEXT_SHOW,
    totalCount = DEFAULT_TOTAL_COUNT,
  } = props

  const totalPageCount = Math.ceil(totalCount / pageSize)

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
    totalPageCount,
  })

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPageCount

  const cn = useMemo(
    () => ({
      arrow: s.arrow,
      container: clsx(s.paginationContainer, className),
      dots: clsx(s.paginationOption, s.dots),
      nowrap: s.nowrap,
      option: s.paginationOption,
      selectedOption: clsx(s.paginationOption, s.selected),
    }),
    [className]
  )

  // Handler for page change, which pass the value of clicked button to Parent.
  const onPageChangeHandler = useCallback(
    (page: number | string) => {
      if (typeof page === 'number' && onPageChange) {
        onPageChange(page)
      }
    },
    [onPageChange]
  )

  const paginationButtons = useMemo(
    () =>
      paginationRange.map((el, index) => {
        const key = `${el}${index}`

        // If the pageItem is a DOT, render the DOTS Unicode character
        if (el === DOTS) {
          return (
            <Typography as={'span'} className={cn.dots} key={key}>
              &#8230;
            </Typography>
          )
        }

        return (
          <Button
            className={el === currentPage ? cn.selectedOption : cn.option}
            key={key}
            onClick={() => onPageChangeHandler(el)}
          >
            {el}
          </Button>
        )
      }),
    [paginationRange, currentPage, cn, onPageChangeHandler]
  )

  return (
    <div className={cn.container}>
      {!isFirstPage && (
        <Button disabled={isFirstPage} onClick={onPrevPage} variant={'icon'}>
          <ArrowIosBackIcon className={cn.arrow} />
        </Button>
      )}
      {paginationButtons}
      {!isLastPage && (
        <Button disabled={isLastPage} onClick={onNextPage} variant={'icon'}>
          <ArrowIosForwardIcon className={cn.arrow} />
        </Button>
      )}
      {selectOptions && (
        <>
          <Typography as={'span'} className={cn.nowrap}>
            {textShow}
          </Typography>
          <Select
            className={s.selectTrigger}
            defaultValue={defaultSelectValue}
            onValueChange={onSelectValueChange}
            options={selectOptions}
            value={`${pageSize}`}
          />
          <Typography as={'span'} className={cn.nowrap}>
            {textPerPage}
          </Typography>
        </>
      )}
    </div>
  )
})
