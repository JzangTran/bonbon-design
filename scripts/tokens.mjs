// Reads the source tokens and resolves references. Shared by the build and the tests.
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (name) => JSON.parse(readFileSync(join(root, 'tokens', name), 'utf8'))

const strip = (obj) => Object.fromEntries(Object.entries(obj).filter(([k]) => !k.startsWith('$')))

export const palette = Object.fromEntries(Object.entries(strip(read('color.json'))).map(([name, steps]) => [name, strip(steps)]))
export const foundation = read('foundation.json')
export const contrastPairs = read('contrast.json').pairs

/** "{orange.600}" → "#D9480F"; anything else is returned as is. */
export function resolve(value) {
  const m = /^\{(\w+)\.(\w+)\}$/.exec(value)
  if (!m) return value
  const hex = palette[m[1]]?.[m[2]]
  if (!hex) throw new Error(`Unknown reference ${value}`)
  return hex
}

const semanticSource = strip(read('semantic.json'))
export const roles = Object.keys(semanticSource)
export const themes = {
  light: Object.fromEntries(roles.map((r) => [r, resolve(semanticSource[r].light)])),
  dark: Object.fromEntries(roles.map((r) => [r, resolve(semanticSource[r].dark)])),
}
export const descriptions = Object.fromEntries(roles.map((r) => [r, semanticSource[r].$description ?? '']))

/** WCAG 2.2 relative luminance and contrast ratio for #RRGGBB colours. */
export function luminance(hex) {
  const v = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
export function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}
