import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { enUS, ru } from 'date-fns/locale'

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

export const DatePickerStoryEN: Story = {
  args: {
    label: 'DatePicker label',
    locale: enUS,
    onSelectSingleDate: () => {},
  },
  name: 'DatePicker Single EN',

  render: args => {
    // remove onSelectSingleDate from args to avoid passing it to DatePicker for storybook
    const { onSelectSingleDate, ...rest } = args
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()

    return <DatePicker onSelectSingleDate={setSelectedDate} selected={selectedDate} {...rest} />
  },
}

export const DatePickerStoryRU: Story = {
  args: {
    defaultValue: new Date('2024-10-31T00:00:00.000Z'),
    label: 'DatePicker label',
    locale: ru,
    onSelectSingleDate: () => {},
  },
  name: 'DatePicker Single RU',

  render: args => {
    // remove onSelectSingleDate from args to avoid passing it to DatePicker for storybook
    const { onSelectSingleDate, ...rest } = args
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()

    return <DatePicker onSelectSingleDate={setSelectedDate} selected={selectedDate} {...rest} />
  },
}
