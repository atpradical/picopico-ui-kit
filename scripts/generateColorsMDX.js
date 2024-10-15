import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const parseColors = () => {
  const filePath = path.resolve(__dirname, '../src/styles/_colors.scss')
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const colorRegex = /--color-([a-zA-Z0-9-]+)-([0-9]+):\s*#([a-fA-F0-9]{6});/g
  const colors = {}

  let match

  while ((match = colorRegex.exec(fileContent)) !== null) {
    const [, category, shade, hex] = match

    if (!colors[category]) {
      colors[category] = {}
    }
    colors[category][shade] = `#${hex}`
  }

  return colors
}

const generateMDX = colors => {
  const colorItems = Object.entries(colors)
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

<ColorPalette>
${colorItems}
</ColorPalette>`
}

const colors = parseColors()
const mdxContent = generateMDX(colors)

const outputPath = path.resolve(__dirname, '../src/stories/Colors.stories.mdx')

fs.writeFileSync(outputPath, mdxContent, 'utf-8')

console.log('MDX file generated successfully!')
