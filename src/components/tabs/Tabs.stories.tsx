import { Meta, StoryObj } from '@storybook/react'

import { ScrollArea, ScrollBar } from '../scroll-area'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './Tabs'

const meta = {
  component: TabsRoot,
  title: 'components/Tabs',
} satisfies Meta<typeof TabsRoot>

export default meta
type Story = StoryObj<typeof TabsRoot>

export const TabsDefault: Story = {
  render: () => {
    return (
      <TabsRoot defaultValue={'tab1'}>
        <ScrollArea>
          <TabsList loop>
            <TabsTrigger value={'tab1'}>{'General information content'}</TabsTrigger>
            <TabsTrigger value={'tab2'}>{'Devices'}</TabsTrigger>
            <TabsTrigger value={'tab3'}>{'Payments'}</TabsTrigger>
          </TabsList>
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
        <TabsContent value={'tab1'}>General information content</TabsContent>
        <TabsContent value={'tab2'}>Devices content</TabsContent>
        <TabsContent value={'tab3'}>Payments content</TabsContent>
      </TabsRoot>
    )
  },
}
