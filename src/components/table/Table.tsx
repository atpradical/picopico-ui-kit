import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

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

const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...props }, ref) => {
    return <tr className={clsx(s.tableRow, className)} {...props} ref={ref} />
  }
)

type TableHeadProps = {
  textAlign?: 'center' | 'left' | 'right'
} & ComponentPropsWithoutRef<'th'>
type TableHeadRef = ElementRef<'th'>

const TableHead = forwardRef<TableHeadRef, TableHeadProps>(
  ({ className, textAlign = 'center', ...props }, ref) => {
    return (
      <th
        className={clsx(s.tableHead, textAlign && s[textAlign], className)}
        {...props}
        ref={ref}
      />
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
