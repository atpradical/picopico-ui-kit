import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const generateMDX = colors => {
  const iconItems = Object.entries(colors)
    .map(([category, shades]) => {
      const shadesEntries = Object.entries(shades)
        .map(([shade, hex]) => `${shade}: '${hex}'`)
        .join(', ')

      return `  <ColorItem
    title="${category.charAt(0).toUpperCase() + category.slice(1)}"
    subtitle="${category} colors"
    colors={{ ${shadesEntries} }}
  />`
    })
    .join('\n')

  return `import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';

<Meta title="Design-System/Colors" />

<IconGallery>
${colorItems}
</IconGallery>`
}
