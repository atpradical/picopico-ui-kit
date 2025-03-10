import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import { CloseOutlineIcon, MoreHorizontalIcon } from '../../icons'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { TextField } from '../text-field'
import { toasterModal } from '../toast'
import { Typography } from '../typography'
import {
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

const descriptionMockText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

const meta = {
  argTypes: {},
  component: DialogRoot,
  title: 'Components/Dialog',
} satisfies Meta<typeof DialogRoot>

export default meta
type Story = StoryObj<typeof meta>

// todo: добавить пропсы в том числе withCloseButton в storybook
// todo: добавить информацию про тоасты в диалоге

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <DialogRoot onOpenChange={setOpen} open={open}>
        <Trigger />
        <DialogContent style={{ width: '380px' }}>
          <Title />
          <Header />
          <Description />
          <Body />
          <Footer />
        </DialogContent>
      </DialogRoot>
    )
  },
}

const Trigger = () => (
  <DialogTrigger asChild>
    <Button title={'click to open'} variant={'icon'}>
      <MoreHorizontalIcon />
    </Button>
  </DialogTrigger>
)

const Title = () => (
  <VisuallyHidden asChild>
    <DialogTitle>Dialog Title</DialogTitle>
  </VisuallyHidden>
)

const Header = () => (
  <DialogHeader>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography as={'h3'} variant={'h3'}>
        Dialog Header
      </Typography>
      <DialogClose asChild>
        <Button title={'close'} variant={'icon'}>
          <CloseOutlineIcon />
        </Button>
      </DialogClose>
    </div>
  </DialogHeader>
)

const Description = () => (
  <VisuallyHidden>
    <DialogDescription>{descriptionMockText}</DialogDescription>
  </VisuallyHidden>
)

const Body = () => (
  <DialogBody>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant={'regular_14'}>{descriptionMockText}</Typography>
      <TextField label={'Some Label'} placeholder={'some placeholder...'} />
      <Checkbox isRequired label={'CheckBox label'} />
      <Button onClick={() => toasterModal({ text: 'This is dialog Toast', variant: 'error' })}>
        Toast Dialog
      </Button>
    </div>
  </DialogBody>
)

const Footer = () => (
  <DialogFooter>
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
      <Button variant={'outlined'}>Yes</Button>
      <Button>No</Button>
    </div>
  </DialogFooter>
)
