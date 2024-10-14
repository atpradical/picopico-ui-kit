import { Meta, StoryObj } from '@storybook/react'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './Tab'

const meta = {
  component: TabsRoot,
  tags: ['autodocs'],
  title: 'components/Tabs',
} satisfies Meta<typeof TabsRoot>

export default meta
type Story = StoryObj<typeof TabsRoot>

export const TabsDefault: Story = {
  render: () => {
    return (
      <TabsRoot defaultValue={'tab1'}>
        <TabsList loop>
          <TabsTrigger disabled value={'tab1'}>
            {'General information'}
          </TabsTrigger>
          <TabsTrigger disabled value={'tab2'}>
            {'Devices'}
          </TabsTrigger>
          <TabsTrigger value={'tab3'}>{'Payments'}</TabsTrigger>
        </TabsList>
        <TabsContent value={'tab1'}>General information content</TabsContent>
        <TabsContent value={'tab2'}>Devices content</TabsContent>
        <TabsContent value={'tab3'}>Payments content</TabsContent>
      </TabsRoot>
    )
  },
}
