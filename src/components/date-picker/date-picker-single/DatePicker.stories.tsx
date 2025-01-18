import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'

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
  component: DatePicker,
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const DatePickerStory: Story = {
  args: {
    defaultValue: new Date('2024-10-31T00:00:00.000Z'),
    label: 'DatePicker label',
    onSelect: () => {},
  },
  name: 'DatePicker',

  render: args => {
    // remove onSelectSingleDate from args to avoid passing it to DatePicker for storybook
    const { onSelect, ...rest } = args
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()

    return <DatePicker onSelect={setSelectedDate} selected={selectedDate} {...rest} />
  },
}
