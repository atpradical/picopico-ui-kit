import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Meta, StoryObj } from '@storybook/react'

import { DatePickerRange } from './DatePickerRange'

const meta = {
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    errorText: {
      control: {
        type: 'text',
      },
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  component: DatePickerRange,
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePickerRange>

export default meta
type Story = StoryObj<typeof meta>

export const DatePickerRangeStory: Story = {
  args: {
    label: 'DatePicker label',
    onSelect: () => {},
  },
  name: 'DatePicker Range',

  render: args => {
    // remove onSelectRangeDate from args to avoid passing it to DatePicker for storybook
    const { onSelect, ...rest } = args
    // State Example:
    // {
    //       from: new Date(2022, 0, 20),
    //       to: addDays(new Date(2022, 0, 20), 20),
    //     }
    const [date, setDate] = useState<DateRange | undefined>()

    return <DatePickerRange onSelect={setDate} selected={date} {...rest} />
  },
}
