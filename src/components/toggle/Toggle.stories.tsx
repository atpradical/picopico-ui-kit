import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './Toggle'

const meta = {
  argTypes: {},
  component: Toggle,
  title: 'Components/Toggle',
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  args: {
    children: 'option 1',
  },
  name: 'Toggle',
}
