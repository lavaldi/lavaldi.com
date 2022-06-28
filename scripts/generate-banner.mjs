/**
 * Use:
 * yarn new:banner --title [title] --fontSize [fontSize]
 *
 * title is mandatory
 * fontSize is optional
 */

import canvasLib from 'canvas';
import { minimist } from '@p-mcgowan/minimist';
import chalk from 'chalk';
import slugify from '@sindresorhus/slugify';
import fs from 'fs';

const COLORS = {
  white: '#FFF',
  portGore: '#1E1E3F',
  dullLavender: '#A599E9',
  gold: '#FAD000',
  mintGreen: '#A5FF90',
  bittersweet: '#FD6665'
};

// eslint-disable-next-line no-console
const log = console.log

const COLOR = {
  main: COLORS.portGore,
  highlight: COLORS.gold,
  background: COLORS.dullLavender,
}

const FONT_SIZE = 70

function drawHighlight(context, line, x, y, lineHeight) {
  context.fillStyle = COLOR.highlight
  const textWidth = context.measureText(line).width
  const newX = x - textWidth / 2 - 30
  context.fillRect(newX, y - 5, textWidth + 20, lineHeight - 15)
}

function drawLine(context, line, x, y) {
  context.fillStyle = COLOR.main
  context.fillText(line, x, y)
}

function drawWrappedText(context, text, x, y, lineWidth, lineHeight) {
  let line = ''
  let newY = y
  const paragraphs = text.split('\n')
  for (let i = 0; i < paragraphs.length; i++) {
    const words = paragraphs[i].split(' ')
    for (let n = 0; n < words.length; n++) {
      const testLine = `${line + words[n]} `
      const metrics = context.measureText(testLine)
      const testWidth = metrics.width
      if (testWidth > lineWidth && n > 0) {
        drawHighlight(context, line, x, newY, lineHeight)
        drawLine(context, line, x, newY)
        line = `${words[n]} `
        newY += lineHeight + 5
      } else {
        line = testLine
      }
    }
    drawHighlight(context, line, x, newY, lineHeight)
    drawLine(context, line, x, newY)
    newY += lineHeight + 5
    line = ''
  }
}

const cWidth = 1200
const cHeight = 630

const canvas = canvasLib.createCanvas(cWidth, cHeight)
const context = canvas.getContext('2d')

context.fillStyle = COLOR.background
context.fillRect(0, 0, cWidth, cHeight)

const parsedArgs = minimist(process.argv.slice(2));
const text = parsedArgs.title
const fontSize = parsedArgs.fontSize || FONT_SIZE

if (text) {
  const maxWidth = 1000
  const lineHeight = fontSize + 50
  const x = cWidth / 2
  const y = 70

  context.font = `bold ${fontSize}pt Fira Code`
  context.textBaseline = 'top'
  context.textAlign = 'center'
  drawWrappedText(context, text, x, y, maxWidth, lineHeight)

  context.fillStyle = COLOR.main
  context.font = 'bold 30pt Fira Code'
  context.fillText('lavaldi.com', 650, 530)

  canvasLib.loadImage('./public/static/favicons/lavaldi-icon.png').then((image) => {
    context.drawImage(image, 420, 515, 70, 70)
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`./public/banners/${slugify(text)}.png`, buffer);
    log(chalk.green(`Image was created: ${process.cwd()}/banner.png`))
  })
} else {
  log(chalk.red('No title :C'))
}
