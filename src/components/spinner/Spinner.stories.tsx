import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta = {
  component: Spinner,
  title: 'Components/Spinner',
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Pimary: Story = {
  args: {
    color: '#345',
    label: 'Loading...',
  },
  name: 'Spinner',
}
