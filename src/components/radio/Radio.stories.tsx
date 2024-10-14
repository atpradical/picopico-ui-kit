import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'
import { Radio, RadioOption } from './Radio'

const mockRadio: RadioOption[] = [
  { id: '1', label: 'RadioGroup', value: '1' },
  { id: '2', label: 'RadioGroup', value: '2' },
  { id: '3', label: 'RadioGroup', value: '3' },
  { id: '4', label: 'RadioGroup', value: '4' },
]

const meta = {
  argTypes: {
    defaultValue: {
      table: {
        summary: 'string',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    options: {
      table: {
        type: {
          detail: `{ id: 'string', label: 'string', value: 'string' }`,
          summary: 'array',
        },
      },
    },
  },
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroup: Story = {
  args: {
    defaultValue: '2',
    options: mockRadio,
  },
  render: args => (
    <Card>
      <Radio {...args} />
    </Card>
  ),
}
