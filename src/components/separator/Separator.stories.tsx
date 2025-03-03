import { Meta, StoryObj } from '@storybook/react'

import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  argTypes: {},
  args: {},
  component: Separator,
  title: 'components/Separator',
}

export default meta
type Story = StoryObj<typeof Separator>

export const DefaultStory: Story = {
  name: 'Separator',
}
