import assert from 'node:assert/strict'
import { test } from 'node:test'
import { contrast, contrastPairs, foundation, palette, roles, themes } from '../scripts/tokens.mjs'

const hex = /^#[0-9A-F]{6}$/i

test('every palette step is a 6-digit hex colour', () => {
  for (const [name, steps] of Object.entries(palette)) for (const [step, v] of Object.entries(steps)) assert.match(v, hex, `${name}.${step}`)
})

test('every semantic role resolves in both themes', () => {
  for (const theme of ['light', 'dark']) {
    for (const r of roles) {
      const v = themes[theme][r]
      assert.ok(hex.test(v) || /^rgba\(/.test(v), `${theme}.${r} = ${v}`)
    }
  }
})

for (const theme of ['light', 'dark']) {
  for (const [fg, bg, min] of contrastPairs) {
    test(`${theme}: ${fg} on ${bg} reaches ${min}:1`, () => {
      const ratio = contrast(themes[theme][fg], themes[theme][bg])
      assert.ok(ratio >= min, `${fg} ${themes[theme][fg]} on ${bg} ${themes[theme][bg]} is ${ratio.toFixed(2)}:1, needs ${min}:1`)
    })
  }
}

test('type ramp: eight styles, sizes and line heights on the 2px/4px grid, line height ≥ 1.2× size', () => {
  const styles = Object.entries(foundation.type).filter(([k]) => !k.startsWith('$'))
  assert.equal(styles.length, 8)
  for (const [name, t] of styles) {
    assert.equal(t.size % 2, 0, `${name} size`)
    assert.equal(t.lineHeight % 4, 0, `${name} line height`)
    assert.ok(t.lineHeight >= t.size * 1.2, `${name} line height too tight`)
    assert.ok(foundation.font.weights[t.weight], `${name} weight`)
  }
})

test('spacing is on the 4px grid', () => {
  for (const [k, v] of Object.entries(foundation.space)) if (!k.startsWith('$')) assert.equal(v % 4, 0, `space.${k}`)
})

test('touch target meets 44px', () => {
  assert.ok(foundation.layout.touchMin >= 44)
})
