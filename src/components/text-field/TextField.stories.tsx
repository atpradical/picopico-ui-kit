import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  argTypes: {
    disabled: {
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
    variant: {
      control: { type: 'select' },
      options: ['password', 'search', 'text'],
      table: {
        defaultValue: { summary: 'text' },
        type: {
          detail: `password', 'search', 'text`,
          summary: 'string',
        },
      },
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Text: Story = {
  args: {
    label: 'Some text-field label',
    placeholder: 'type something...',
  },
}

export const Password: Story = {
  args: {
    label: 'Some text-field label',
    placeholder: 'type password...',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Some text-field label',
    placeholder: 'type to start search...',
    variant: 'search',
  },
}

export const TextWithError: Story = {
  args: {
    errorText: 'Some error occurred...',
    isRequired: true,
    label: 'Some text-field label',
    placeholder: 'type something...',
  },
}
