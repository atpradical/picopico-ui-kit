import { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'
import { Avatar } from './Avatar'

const meta = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's', 'xl'],
      table: {
        defaultValue: { summary: 'm' },
        type: {
          detail: `'l', 'm', 's', 'xs'`,
          summary: 'string',
        },
      },
    },
  },
  args: {
    name: 'User Name',
    size: 'm',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEwDTsw5qeyPzAFFLuPAJaeE3Q4YxSz6v0Q&s',
  },
  component: Avatar,
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
export type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  name: 'Avatar',
  render: args => {
    return (
      <Card>
        <Avatar {...args} />
      </Card>
    )
  },
}
