import type { Meta, StoryObj } from '@storybook/react'

import { MoreHorizontalIcon } from '../../icons'
import { Button } from '../button'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './Menubar'

const meta = {
  argTypes: {},
  component: Menubar,
  title: 'Components/Menubar',
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Menubar',
  render: () => {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button variant={'icon'}>
              <MoreHorizontalIcon />
            </Button>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Menubar Item</MenubarItem>
            <MenubarItem>Menubar Item</MenubarItem>
            <MenubarItem>Menubar Item</MenubarItem>
            <MenubarItem>Menubar Item</MenubarItem>
            <MenubarItem>Menubar Item</MenubarItem>
            <MenubarItem>Menubar Item</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}
