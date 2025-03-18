import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { SortDownIcon, SortUpIcon } from '@/icons'
import clsx from 'clsx'

import s from './Table.module.scss'

const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...props }, ref) => {
    return <table className={clsx(s.table, className)} {...props} ref={ref} />
  }
)

type TableHeaderProps = ComponentPropsWithoutRef<'thead'>
type TableHeaderRef = ElementRef<'thead'>

const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>(({ className, ...props }, ref) => {
  return <thead className={clsx(s.header)} {...props} ref={ref} />
})

const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...props }, ref) => {
    return <tbody className={clsx(s.body, className)} {...props} ref={ref} />
  }
)

const TableFooter = forwardRef<ElementRef<'tfoot'>, ComponentPropsWithoutRef<'tfoot'>>(
  ({ className, ...props }, ref) => {
    return <tfoot className={clsx(s.footer, className)} {...props} ref={ref} />
  }
)

type TableRowProps = ComponentPropsWithoutRef<'tr'>
type TableHeadRef = ElementRef<'tr'>

const TableRow = forwardRef<TableHeadRef, TableRowProps>(({ className, ...props }, ref) => {
  return <tr className={clsx(s.tableRow, className)} {...props} ref={ref} />
})

type TableHeadProps = {
  onSort?: () => void
  sortOrder?: 'asc' | 'desc'
  sortable?: boolean
  textAlign?: 'center' | 'left' | 'right'
} & ComponentPropsWithoutRef<'th'>
type TableRowRef = ElementRef<'th'>

const TableHead = forwardRef<TableRowRef, TableHeadProps>(
  (
    {
      children,
      className,
      onSort,
      sortOrder = 'asc',
      sortable = false,
      textAlign = 'center',
      ...props
    },
    ref
  ) => {
    const sortHandler = () => {
      if (onSort) {
        onSort()
      }
    }

    return (
      <th
        className={clsx(s.tableHead, textAlign && s[textAlign], sortable && s.highLight, className)}
        {...props}
        ref={ref}
      >
        <div
          className={clsx(s.headerCellContainer, textAlign && s[textAlign])}
          onClick={sortHandler}
        >
          {children}
          {sortable && (
            <div className={s.sortIconContainer}>
              <SortUpIcon className={clsx(s.sortIcon, sortOrder === 'asc' && s.activeSort)} />
              <SortDownIcon className={clsx(s.sortIcon, sortOrder === 'desc' && s.activeSort)} />
            </div>
          )}
        </div>
      </th>
    )
  }
)

type TableCellProps = {
  textAlign?: 'center' | 'left' | 'right'
} & ComponentPropsWithoutRef<'td'>
type TableCellRef = ElementRef<'td'>

const TableCell = forwardRef<TableCellRef, TableCellProps>(
  ({ className, textAlign = 'center', ...props }, ref) => {
    return <td className={clsx(s.cell, s[textAlign], className)} {...props} ref={ref} />
  }
)

const TableCaption = forwardRef<ElementRef<'caption'>, ComponentPropsWithoutRef<'caption'>>(
  ({ className, ...props }, ref) => {
    return <caption className={clsx(s.cell, className)} {...props} ref={ref} />
  }
)

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
