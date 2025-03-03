import type { Meta, StoryObj } from '@storybook/react'

import { MoreHorizontalIcon } from '../../icons'
import { Button } from '../button'
import { Typography } from '../typography'
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from './Popover'

const meta = {
  argTypes: {},
  component: Popover,
  title: 'Components/Popover',
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Popover',
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'icon'}>
            <MoreHorizontalIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Typography>Popover Content</Typography>
        </PopoverContent>
      </Popover>
    )
  },
}

export const Default2: Story = {
  name: 'Popover2',
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'icon'}>
            <MoreHorizontalIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow style={{ fill: 'white' }} />
          <Button>Popover Content</Button>
          <Button>Popover Content</Button>
          <Button>Popover Content</Button>
          <Button>Popover Content</Button>
        </PopoverContent>
      </Popover>
    )
  },
}
