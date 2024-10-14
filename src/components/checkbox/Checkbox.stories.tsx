import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    error: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    label: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  args: {
    label: 'CheckBox label',
  },
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
The Checkbox component is a versatile and accessible checkbox input element built using Radix UI's Checkbox primitive. It supports various states such as checked, disabled, and error, and can be easily customized with a label and error message.

### Key Features:
- **Accessibility**: Built with Radix UI's Checkbox primitive, ensuring accessibility standards are met.
- **Customizable Label**: Supports a customizable label that can be a simple string or a complex ReactNode.
- **Error Handling**: Displays an error message when an error prop is provided.
- **Disabled State**: Supports a disabled state that visually indicates the checkbox is not interactive.
- **Required Indicator**: Optionally displays a required indicator next to the label.

### Usage:
\`\`\`jsx
<Checkbox label="I agree to the terms and conditions" isRequired />
\`\`\`

### Props:
- **checked**: Determines whether the checkbox is checked.
- **disabled**: Determines whether the checkbox is disabled.
- **error**: Displays an error message below the checkbox.
- **isRequired**: Indicates whether the checkbox is required.
- **label**: The label for the checkbox, which can be a string or a ReactNode.

### Styling:
The component uses CSS modules for styling, allowing for easy customization and encapsulation of styles.

### Dependencies:
- **Radix UI**: Provides the underlying checkbox primitive.
- **Typography**: Used for rendering the label and error message.
- **CheckmarkOutlineIcon**: Displays the checkmark icon when the checkbox is checked.

### Example:
\`\`\`tsx
<Checkbox
  label={<span>I agree to the <a href="#">terms and conditions</a></span>}
  isRequired
  error="This field is required"
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  title: 'components/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const DefaultStory: Story = {
  name: 'Checkbox',
}

export const DisabledStory: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  name: 'Disabled Checkbox',
}

export const ErrorStory: Story = {
  args: {
    checked: true,
    error: 'Some error occurred',
    isRequired: true,
  },
  name: 'Checkbox with Error',
}
