# Foundations

Values live in `tokens/`; this page says how to use them.

## Colour

Three layers, as in Fluent 2 and Atlassian: **palettes** (raw steps, never used by screens) → **roles** (what a colour is for) → **components**.

| Role group | Roles | Rule |
|---|---|---|
| Ground | `background`, `surface`, `surfaceSubtle`, `surfaceStrong`, `imageSlot`, `overlay` | White first. `surfaceSubtle` for quiet fills (search field, grouped section), never for decoration. |
| Lines | `border`, `borderStrong`, `divider` | `border` only where a card must stand apart from the page or two regions meet; `borderStrong` for the outline of a control; `divider` between list rows. |
| Text | `text`, `textSecondary`, `textTertiary`, `textDisabled` | Three levels of emphasis, nothing else. Never tint text to emphasise it. |
| Action | `accent`, `accentHover`, `accentPressed`, `onAccent`, `accentSubtle`, `onAccentSubtle`, `accentBorder`, `link`, `focusRing` | One `accent` button per screen. Selected chips, tabs and nav items use `accentSubtle` + `onAccentSubtle`. Links in text use `link`. |
| Brand | `brand` | Logo, mascot, large shapes. Never text, never a button. |
| Status | `success*`, `warning*`, `danger*`, `info*` | Only for status. Always paired with words or an icon. Amber, not orange, for warnings. |
| Commerce | `promo`, `promoSubtle` | Discount and voucher labels. |
| Charts | `chart1`…`chart5`, `chartGrid`, `chartAxis` | Fixed order; series 1 is the shop's own data. |

Contrast: text 4.5:1, large text and UI parts 3:1 (WCAG 2.2 1.4.3, 1.4.11). `npm test` checks every pair in `tokens/contrast.json` in both themes.

## Type

One family on every platform: **Be Vietnam Pro**, drawn for Vietnamese diacritics. Eight named styles; a screen uses three to five of them (Ant Design).

| Style | Size / line | Weight | Use |
|---|---|---|---|
| `display` | 40 / 48 | 700 | Landing hero, once per page, web only |
| `title1` | 28 / 36 | 700 | Page title |
| `title2` | 22 / 28 | 600 | Section title; shop name on its page |
| `title3` | 18 / 24 | 600 | Card title, dialog title, list group |
| `body` | 16 / 24 | 400 | Running text, input values |
| `bodySm` | 14 / 20 | 400 | Secondary text, dense lists, tables |
| `label` | 14 / 20 | 600 | Buttons, tabs, field labels, chips |
| `caption` | 12 / 16 | 500 | Timestamps, badges, helper text |

Emphasis:

- **Bold (600)** for the one value the reader needs first: a total, a delivery time, a dish name in a sentence. Never a whole sentence.
- **Italic** only for quoted words (a customer's review). Vietnamese diacritics lose legibility in small italics.
- **Underline** only for links in running text; standalone links (menus, text buttons) underline on hover.
- **Colour**: only the three text levels; `link` for links. No coloured text for emphasis, no red text that is not an error.
- **Case**: sentence case everywhere (Fluent 2). No all-caps labels.
- Numbers that line up use tabular figures.

## Space

4px base (Fluent 2, Atlassian). Steps `1`…`16` = 4…64 px. Inside a component: 4–16. Between related blocks: 16–24. Between sections: 32–48. Lay out with gap, not margins.

## Shape

| Radius | px | For |
|---|---|---|
| `xs` | 4 | badges, tags, tiny marks |
| `control` | 10 | buttons, inputs, selects, chips, tabs, icon buttons |
| `card` | 12 | cards, images, dialogs, menus, banners |
| `sheet` | 20 | top corners of a bottom sheet |
| `full` | — | avatars, switches, status dots only |

## Elevation

Content is flat. A card that must stand apart gets a `border`. Only layers above the page (menu, popover, sheet, dialog, snackbar) get the `overlay` shadow, with the `overlay` scrim behind modal ones.

## Motion

Motion explains a change, it never decorates. `fast` 120 ms for state changes (press, toggle), `base` 200 ms for layers coming in and out, `slow` 280 ms for page transitions. Enter with `easeStandard`, leave with `easeExit`. All durations drop to 0 when the user asks for reduced motion.

## Layout

| Size class | Width | Columns | Gutter | Typical |
|---|---|---|---|---|
| base | < 600 | 4 | 16 | phones |
| md | 600–1023 | 8 | 24 | tablets, narrow windows |
| lg | 1024–1439 | 12 | 24 | laptops |
| xl | ≥ 1440 | 12, content max 1200 | 24 | desktops |

Running text stays within 680 px. Touch targets are at least 44 × 44 (48 on Android lists). Reflow before you hide: stack columns, then move secondary panels below, and only then collapse into a sheet or menu.

### Page templates

| Template | Structure | Examples |
|---|---|---|
| List | header · filters (chips, sticky) · list · paging or infinite load | shops, orders, dishes |
| Detail | header with back · hero (image, title, key facts) · sections · sticky primary action | shop, order, dish |
| Form | header with back · grouped fields (label above, help below) · sticky submit | address, dish form, open shop |
| Workspace (web) | top bar · left nav · work area · optional right panel; each scrolls on its own | merchant, console, ops |
| Checkout | summary first (items, fees, total) · address · payment · one primary action | cart, pay |
| Result | what happened · what it means · what happens next · one way forward | order placed, shop submitted |
