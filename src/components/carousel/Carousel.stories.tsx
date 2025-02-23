import dummyImage2 from '@/assets/webp/Mask group.png'
import dummyImage from '@/assets/webp/dummy-image.webp'
import { Meta, StoryObj } from '@storybook/react'

import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel'

const meta: Meta<typeof Carousel> = {
  argTypes: {},
  component: Carousel,
  title: 'components/Carousel',
}

export default meta
type Story = StoryObj<typeof Carousel>

export const DefaultStory: Story = {
  name: 'Carousel',
  render: () => (
    <Carousel style={{ height: '300px', width: '300px' }}>
      <CarouselContent>
        <CarouselItem>
          <img
            alt={'image'}
            src={dummyImage}
            style={{ height: '300px', objectFit: 'cover', width: '300px' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt={'image'}
            src={dummyImage2}
            style={{ height: '300px', objectFit: 'cover', width: '300px' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt={'image'}
            src={dummyImage}
            style={{ height: '300px', objectFit: 'cover', width: '300px' }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDotButtons />
    </Carousel>
  ),
}
