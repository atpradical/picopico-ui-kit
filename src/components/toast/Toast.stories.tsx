import type { Meta, StoryObj } from '@storybook/react'

import { MoreHorizontalOutlineIcon } from '../../icons'
import { Button } from '../button'
import { CustomToast, CustomToastContainer, toaster } from './Toast'

const meta = {
  argTypes: {
    text: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['error', 'success'],
      table: {
        defaultValue: { summary: 'success' },
        type: {
          detail: `'error', 'success'`,
          summary: 'string',
        },
      },
    },
  },
  component: CustomToast,
  tags: ['autodocs'],
  title: 'Components/Toast',
} satisfies Meta<typeof CustomToast>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
  render: args => {
    const invokeToast = () => {
      toaster({ ...args })
    }

    return (
      <div>
        <Button onClick={invokeToast} variant={'icon'}>
          <MoreHorizontalOutlineIcon height={24} width={24} />
        </Button>
        <CustomToastContainer />
      </div>
    )
  },
}
