import { Meta, StoryObj } from '@storybook/react'

import { DatePickerRange } from '../date-picker-range'
import { DatePicker } from '../date-picker-single'
import { Calendar } from './Calendar'

const meta = {
  argTypes: {},
  component: Calendar,
  title: 'Components/DatePicker',
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const CalendarStory: Story = {
  name: 'Calendar',
}
