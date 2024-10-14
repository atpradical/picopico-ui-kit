import { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './TextArea'

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
    error: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
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
    placeholder: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Some text-area label',
    placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  name: 'TextArea',
}

export const TextAreaWithError: Story = {
  args: {
    error: 'Some error occurred...',
    isRequired: true,
    label: 'Some text-area label',
    placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  name: 'TextArea with error',
}
