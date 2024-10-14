import dummyImage2 from '@/assets/webp/Mask group.png'
import dummyImage from '@/assets/webp/dummy-image.webp'
import { Meta, StoryObj } from '@storybook/react'

import { Carousel } from './Carousel'

const meta: Meta<typeof Carousel> = {
  argTypes: {},
  component: Carousel,
  tags: ['autodocs'],
  title: 'components/Carousel',
}

export default meta
type Story = StoryObj<typeof Carousel>

const slides = [dummyImage, dummyImage2]

export const DefaultStory: Story = {
  args: {
    slides: slides.map(i => i),
  },
  name: 'Carousel',
  render: args => (
    <div style={{ height: '500px', width: '500px' }}>
      <Carousel {...args} />
    </div>
  ),
}
