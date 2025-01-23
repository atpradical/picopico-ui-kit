import type { Meta, StoryObj } from '@storybook/react'

import { ArrowBackOutlineIcon, BellOutlineIcon } from '../../icons'
import { Button } from './Button'

const meta = {
  argTypes: {
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
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
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
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outlined', 'nb-outlined', 'link', 'danger', 'icon'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          detail: `primary', 'secondary', 'outlined', 'nb-outlined', 'link', 'danger', 'icon`,
          summary: 'string',
        },
      },
    },
  },
  component: Button,
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

export const NBOutlined: Story = {
  args: {
    children: 'Outlined button w/out border',
    variant: 'nb-outlined',
  },
  name: 'Outlined w/out border',
}

export const Danger: Story = {
  args: {
    children: 'Danger button',
    variant: 'danger',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'FullWidth button',
    fullWidth: true,
  },
  name: 'FullWidth Button',
}

export const Link: Story = {
  args: {
    children: 'Link button',
    variant: 'link',
  },
}

export const ButtonWithIcon: Story = {
  args: {
    children: (
      <>
        <ArrowBackOutlineIcon />
        Button with icon
      </>
    ),
    variant: 'link',
  },
}

export const IconAsButton: Story = {
  args: {
    children: <BellOutlineIcon />,
    variant: 'icon',
  },
}

export const ButtonWithSpinner: Story = {
  args: {
    isLoading: true,
    spinnerProps: { color: 'red' },
  },
}
