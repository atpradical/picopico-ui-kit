import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    as: {
      control: { disable: true },
      table: {
        defaultValue: { summary: '<p/>' },
        type: {
          summary:
            'Polymorphic prop that allows rendering the typography with a custom HTML tag while preserving predefined typography styles.',
        },
      },
    },
    grey: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    isRequired: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'regular_16',
        'bold_16',
        'regular_14',
        'medium_14',
        'bold_14',
        'small',
        'semi-bold_small',
        'regular_link',
        'small_link',
        'error',
      ],
      table: {
        defaultValue: { summary: 'regular_14' },
        type: {
          detail: `'large', 'h', 'h2', 'h3', 'regular_16', 'bold_16', 'regular_14', 'medium_14', 'bold_14', 'small','semi-bold_small', 'regular_link', 'small_link','error',`,
          summary: 'string',
        },
      },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
  },
}

export const RegularText16: Story = {
  args: {
    variant: 'regular_16',
  },
}
export const BoldText16: Story = {
  args: {
    variant: 'bold_16',
  },
}

export const RegularText14: Story = {
  args: {
    variant: 'regular_14',
  },
}

export const MediumText14: Story = {
  args: {
    variant: 'medium_14',
  },
}
export const BoldText14: Story = {
  args: {
    variant: 'bold_14',
  },
}
export const SmallText: Story = {
  args: {
    variant: 'small',
  },
}
export const SemiBoldSmallText: Story = {
  args: {
    variant: 'semi-bold_small',
  },
}

export const RegularLink: Story = {
  args: {
    variant: 'regular_link',
  },
}

export const SmallLink: Story = {
  args: {
    variant: 'small_link',
  },
}
export const Error: Story = {
  args: {
    variant: 'error',
  },
}
