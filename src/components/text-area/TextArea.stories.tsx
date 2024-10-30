import { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './TextArea'

const meta = {
  argTypes: {
    counterLimit: {
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    counterValue: {
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
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
    errorText: {
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
    errorText: 'Some error occurred...',
    isRequired: true,
    label: 'Some text-area label',
    placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  name: 'TextArea with error',
}
