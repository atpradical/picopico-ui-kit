import type { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from './Color-pallet'
import { colors } from './color-pallet.mock'

const meta = {
  argTypes: {},
  component: ColorPalette,
  title: 'Design System/Colors',
} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
  name: 'Color Palette',
  args: { colors: colors },
}
