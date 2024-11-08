import type { Meta, StoryObj } from '@storybook/react'

import { PlusCircleOutlineIcon } from '../../icons'
import { FileUploader } from './FileUploader'

const meta = {
  argTypes: {},
  component: FileUploader,
  title: 'Components/FileUploader',
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    accept: ['image/jpeg', 'image/png'],
    children: 'choose file',
  },
  name: 'FileUploader as Button',
}

export const Secondary: Story = {
  args: {
    accept: ['image/jpeg', 'image/png'],
    children: <PlusCircleOutlineIcon />,
    variant: 'icon',
  },
  name: 'FileUploader as Icon',
}
