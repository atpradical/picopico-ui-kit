import type { Meta, StoryObj } from '@storybook/react'

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'

const meta = {
  argTypes: {},
  component: ToggleGroup,
  title: 'Components/ToggleGroup',
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
  },
  render: () => {
    return (
      <ToggleGroup defaultValue={'1'} type={'single'}>
        <ToggleGroupItem value={'1'}>option 1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>option 2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>option 3</ToggleGroupItem>
      </ToggleGroup>
    )
  },
}
