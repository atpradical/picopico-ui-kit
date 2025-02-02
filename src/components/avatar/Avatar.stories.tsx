import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
      table: {
        defaultValue: { summary: 'm' },
        type: {
          detail: `'xs', 's', 'm', 'l', 'xl'`,
          summary: 'string',
        },
      },
    },
  },
  args: {
    size: 'm',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEwDTsw5qeyPzAFFLuPAJaeE3Q4YxSz6v0Q&s',
    userName: 'User Name',
  },
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
### Технологии
- React, CSS Modules, clsx
- Radix UI: \`@radix-ui/react-avatar\`

### Особенности
- Если изображение не загружено, отображается fallback: либо первая буква имени пользователя, либо иконка.
- Компонент поддерживает различные размеры, через prop \`size\`.
- Имя пользователя отображается рядом с аватаром, если prop \`showUserName\` = \`true\`.

### Размеры
| Значение | Размер (px) |
|----------|-------------|
| \`xs\` | 36px        |
| \`s\`  | 48px        |
| \`m\`  | 192px        |
| \`l\`  | 204px        |
| \`xl\` | 316px        |
        `,
      },
    },
  },
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
export type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  name: 'Avatar',
}
