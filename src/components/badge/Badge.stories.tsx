import { Meta, StoryObj } from '@storybook/react'

import { BellOutlineIcon } from '../../icons'
import { Badge } from './Badge'

const meta = {
  argTypes: {
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    count: {
      control: { type: 'number' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['dot', 'standard'],
      table: {
        defaultValue: { summary: 'standard' },
        type: {
          detail: `'dot', 'standard'`,
          summary: 'string',
        },
      },
    },
  },
  component: Badge,
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const BadgeOnBellIcon: Story = {
  args: {
    children: <BellOutlineIcon height={'24px'} width={'24px'} />,
    count: 10,
  },
}
