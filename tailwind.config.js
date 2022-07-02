// @ts-check
const { generate } = require('@ant-design/colors')
const { mapKeys } = require('remeda')

/**
 * @param {string[]} colors
 */
const toColors = colors => mapKeys(colors, k => Math.max(Number(k) * 100, 50))

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: toColors(generate(process.env.THEME || '#1890ff')),
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
}
