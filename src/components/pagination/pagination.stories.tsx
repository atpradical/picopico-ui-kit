import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination as PaginationComponent } from './pagination'

const meta = {
  argTypes: {},
  component: PaginationComponent,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof PaginationComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  args: {
    currentPage: 5,
    pageSize: 10,
    selectOptions: [
      { label: '5', value: '5' },
      { label: '10', value: '10' },
      { label: '20', value: '20' },
    ],
    totalCount: 90,
  },

  render: ({ currentPage, pageSize, ...args }) => {
    const [currentPageExample, setCurrentPageExample] = useState(currentPage)
    const [pageSizeExample, setPageSizeExample] = useState(String(pageSize))

    const nextPageHandler = () => {
      setCurrentPageExample(prevState => prevState + 1)
    }

    const previousPageHandler = () => {
      setCurrentPageExample(prevState => prevState - 1)
    }

    const pageChangeHandler = (page: number) => {
      setCurrentPageExample(page)
    }

    const pageSizeChangeHandler = (value: string) => {
      setPageSizeExample(value)
      setCurrentPageExample(1)
    }

    return (
      <PaginationComponent
        currentPage={currentPageExample}
        onNextPage={nextPageHandler}
        onPageChange={pageChangeHandler}
        onPrevPage={previousPageHandler}
        onSelectValueChange={pageSizeChangeHandler}
        pageSize={+pageSizeExample}
        {...args}
      />
    )
  },
}
