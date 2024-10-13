import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outlined', 'nb-outlined', 'link', 'danger', 'icon'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'string',
          detail: `primary', 'secondary', 'outlined', 'nb-outlined', 'link', 'danger', 'icon`,
        },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
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
    as: {
      control: { disable: true },
      table: {
        defaultValue: { summary: '<button/>' },
        type: {
          summary:
            'Polymorphic prop that allows rendering the button with a custom HTML tag while preserving predefined button styles.',
        },
      },
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary button',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger button',
    variant: 'danger',
  },
}

export const FullWidth: Story = {
  name: 'FullWidth Button',
  args: {
    children: 'FullWidth button',
    fullWidth: true,
  },
}

export const Link: Story = {
  args: {
    children: 'Link button',
    variant: 'link',
  },
}
//todo: add some icon
export const ButtonWithIcon: Story = {
  args: {
    children: 'Button with icon',
    variant: 'link',
  },
}

//todo: add some icon
export const IconAsButton: Story = {
  args: {
    children: 'Icon as button',
    variant: 'icon',
  },
}
