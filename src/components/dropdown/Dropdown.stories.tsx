import type { Meta, StoryObj } from '@storybook/react'

import { EditOutlineIcon, MoreHorizontalIcon, TrashOutlineIcon } from '../../icons'
import { Button } from '../button'
import { Typography } from '../typography'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from './Dropdown'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'DropdownMenu',
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'icon'}>
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <EditOutlineIcon /> <Typography>Edit</Typography>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TrashOutlineIcon />
                <Typography>Delete</Typography>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    )
  },
}
