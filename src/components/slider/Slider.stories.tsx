import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './Slider'

const meta = {
  argTypes: {},
  component: Slider,
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Slider',
}
