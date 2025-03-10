import { Meta, StoryObj } from '@storybook/react'

import {
  PolaroidIllustration,
  SignUpConfirmedIllustration,
  SignUpIllustration,
  TimeManagementIllustration,
} from './index'

const meta = {
  argTypes: {},
  title: 'Design System/Illustrations',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SignUpConfirmed: Story = {
  render: () => <SignUpConfirmedIllustration />,
}

export const SignUp: Story = {
  render: () => <SignUpIllustration />,
}

export const TimeManagement: Story = {
  render: () => <TimeManagementIllustration />,
}
export const Polaroid: Story = {
  render: () => <PolaroidIllustration />,
}
