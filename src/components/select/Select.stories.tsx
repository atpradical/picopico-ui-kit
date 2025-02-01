import type { Meta, StoryObj } from '@storybook/react'

import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '../../icons'
import { OptionsValue, Select } from './Select'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    label: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    options: {
      table: {
        type: {
          detail: `{ option: 'string', value: 'string' }`,
          summary: 'array',
        },
      },
    },
    placeholder: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    showScroll: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    label: 'Select-box',
    placeholder: 'choose options...',
  },
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectItems: OptionsValue[] = [
  { label: 'apple', value: 'apple' },
  { label: 'banana', value: 'banana' },
  { label: 'orange', value: 'orange' },
  { label: 'mango', value: 'mango' },
  { label: 'coconut', value: 'coconut' },
  { label: 'tomato', value: 'tomato' },
  { label: 'grape', value: 'grape' },
  { label: 'pineapple', value: 'pineapple' },
]

const selectItemsWithIcons: OptionsValue[] = [
  { icon: <FlagRussiaIcon />, label: 'Russian', value: 'Russian' },
  { icon: <FlagUnitedKingdomIcon />, label: 'English', value: 'English' },
]

export const Default: Story = {
  args: {
    options: selectItems,
    showScroll: true,
  },
}

export const WithIcons: Story = {
  args: {
    defaultValue: selectItemsWithIcons[0]?.value,
    options: selectItemsWithIcons,
  },
}
