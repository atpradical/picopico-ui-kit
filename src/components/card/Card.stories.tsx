import { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  argTypes: {
    as: {
      control: { disable: true },
      table: {
        defaultValue: { summary: '<div/>' },
        type: {
          summary:
            'Polymorphic prop that allows rendering the card with a custom HTML tag while preserving predefined card styles.',
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'transparent'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          detail: `'default', 'transparent'`,
          summary: 'string',
        },
      },
    },
  },
  component: Card,
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
  },
}
