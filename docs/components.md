# Components

Four tiers (Brad Frost's composition, without the chemistry names). A tier only uses tiers below it. Names and props are the same on web (React DOM, `web/src/shared/ui`) and mobile (React Native, `mobile/src/shared/ui`), so one page of documentation covers both.

| Tier | Components |
|---|---|
| 0 · Tokens | generated `tokens.css` / `tokens.ts` |
| 1 · Base | `Text` (variant = one of the eight styles, tone = text/secondary/tertiary/accent/danger…), `Icon`, `Stack` (gap, direction, align), `Surface` (ground, border, radius), `Divider`, `VisuallyHidden` |
| 2 · Controls and display | `Button`, `IconButton`, `TextField`, `TextArea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Chip`, `Badge`, `Avatar`, `Card`, `ListItem`, `Tabs`, `SegmentedControl`, `Price`, `Rating`, `QuantityStepper`, `Skeleton`, `Spinner` |
| 3 · Patterns | `PageHeader`, `InlineMessage`, `Banner`, `Snackbar`, `Dialog`, `Sheet`, `Menu`, `Popover`, `EmptyState`, `ResultPage`, `FormLayout`, `Inbox`; commerce: `ShopCard`, `ProductCard`, `CartLine`, `OrderTimeline`, `OrderRow`, `AddressCard`, `PaymentMethodCard`, `VoucherCard` |

Business components (an order's status, a shop's opening hours) live in the app's `entities/` and `widgets/`, built from tier 2–3; they never reach into tokens directly.

## Rules for every component

- Styles come only from tokens: no hex, no raw font size, no one-off radius.
- One `variant` prop for appearance, one `size` prop for scale. Control heights: web `sm` 32, `md` 40, `lg` 48 px (dense workspaces); mobile `md` 48, `lg` 56 px (touch). No boolean style props that combine badly.
- States: default, hover (web), pressed, focus-visible (2 px `focusRing`, 2 px offset), disabled, loading, selected, invalid.
- Accessible name always present; icon-only controls require `label`.
- Works at 200 % text on web and the largest font size on mobile without clipping.
- Each component has a docs entry: when to use, when not, anatomy, variants, states, content, accessibility, and its test.

## Button

| Variant | Look | Use |
|---|---|---|
| `primary` | `accent` fill, `onAccent` text | The one main action of a screen |
| `secondary` | `surface` fill, `borderStrong` outline, `text` | Other actions next to the primary |
| `neutral` | `neutralAction` fill | A strong action that must not compete with the brand (dark CTA on marketing pages) |
| `ghost` | text only, `surfaceSubtle` on hover | Low-emphasis actions in toolbars and rows |
| `danger` | `danger` fill | Confirming a destructive action inside a dialog only |

Radius `control` (10 px). Label in `label` style. Loading keeps the width and shows a spinner in place of the leading icon. A button that ends a step can carry a value: **Đặt món · 95.000 ₫**.

## TextField

Label above (always visible), optional help text below, error replaces help text in `danger` with an icon, counter `n/max` inside the right edge when there is a limit. Correct keyboard and autofill type. Keep the value when an error appears. Required fields are marked with a red `*` before the label; optional ones are not marked.

## Banner and InlineMessage

Tone (`info`, `success`, `warning`, `danger`), icon, title (one line, the problem or the state), body (what it means), one action. Banners span the work area under the header; inline messages sit inside the section they talk about.

## Snackbar

Bottom-centre on mobile above the tab bar, bottom-left on web. One line + one text action (usually **Hoàn tác**). ≥ 6 s, pauses while hovered or focused, one at a time.

## Dialog and Sheet

Dialog: title says the question ("Xoá món Trà đá?"), body says the consequence, buttons say the outcome (**Xoá món** / **Giữ lại**). Sheet (mobile): for choosing or a short task over the current page, with a grab handle and a close button; never stack sheets.

## PageHeader

Back arrow (or close for modal pages) + title in `title3`; optional trailing actions (max two icons). The same on every non-tab page.

## Testing

Each component has: a render test of every variant and state, a keyboard test (web), an accessibility check (name, role, contrast via tokens), a dark-mode snapshot, and a 200 % text check. Showcase pages: web `/design` (public site), mobile `dev-ui` screen.

## Status (v5.0, 2026-11-19)

| Component | Web (`web/src/shared/ui`) | Mobile (`mobile/src/shared/ui`) |
|---|---|---|
| Text | `text.tsx` | `text.tsx` (`tone`) |
| Button | `button.tsx` | `button.tsx` |
| IconButton | `icon-button.tsx` | `controls.tsx` |
| TextField | `text-field.tsx` | `input.tsx` (exported as `TextField`) |
| Checkbox | `checkbox.tsx` | `checkbox.tsx` |
| Chip | `chip.tsx` | `controls.tsx` |
| Switch | `switch.tsx` | `controls.tsx` (platform switch) |
| Badge | `badge.tsx` (tones) | `controls.tsx` |
| Avatar | `avatar.tsx` | `display.tsx` |
| ListItem | `list-item.tsx` | `display.tsx` |
| Price, Rating, QuantityStepper | `commerce.tsx` | `display.tsx` |
| Spinner | `spinner.tsx` | `display.tsx` |
| InlineMessage, Banner | `message.tsx` | `message.tsx` |
| Snackbar | `snackbar.ts` (`showSnackbar`) | `toast.tsx` (`useSnackbar().snackbar`) |
| ResultPage | `result-page.tsx` | `message.tsx` |
| EmptyState | `empty-state.tsx` (`action`) | `empty-state.tsx` |
| PageHeader | workspace header | `page-header.tsx` |
| Dialog, Sheet, Menu, Popover | `dialog.tsx`, `sheet.tsx`, `dropdown-menu.tsx`, `popover.tsx` | `sheet.tsx` |

Showcases: web Resources › Design › Components (`/resources/design/components/<slug>`), mobile `/dev-ui`. Tests: web `npm test` (Vitest), mobile `npm test` (Jest), both in CI.

Still to build: SegmentedControl and Tabs as kit components (they live in pages today), Dialog on mobile, the Inbox pattern (phase 3), and the commerce patterns ShopCard, ProductCard, CartLine, OrderTimeline, AddressCard, PaymentMethodCard, VoucherCard (phase 4, with the screens that use them).
