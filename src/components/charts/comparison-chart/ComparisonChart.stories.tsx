import { Meta, StoryObj } from '@storybook/react'

import { Colors, ComparisonChart, mockdata } from './ComparisonChart'

const meta: Meta<typeof ComparisonChart> = {
  argTypes: {},
  args: {},
  component: ComparisonChart,
  parameters: {},
  title: 'components/Charts/ComparisonChart',
}

export default meta
type Story = StoryObj<typeof ComparisonChart>

export const DefaultStory: Story = {
  args: {
    chartTitle: 'Comparison Chart',
    data: mockdata,
    primaryLegendText: 'Primary',
    primaryLineColor: Colors.Danger100,
    secondaryLegendText: 'Secondary',
    secondaryLineColor: Colors.Success900,
  },
  name: 'Comparison Chart',

  render: args => {
    return <ComparisonChart {...args} />
  },
}
