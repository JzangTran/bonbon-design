# bonbon design system

The design language, source tokens and UI kit rules for every bonbon surface: the customer and seller apps (React Native), the merchant, console and ops workspaces, the public site, help centre and developer portal (React). The kit is brand-agnostic: change the brand palette and most e-commerce products can use it as is.

**Story.** bonbon connects neighbourhood food shops with the people who live and work next to them. A customer has fifteen minutes for lunch; a cook is taking orders with one hand. Both need every screen to answer *where am I, what can I do, what happens next*. Our promise: **Ngon gần nhà, rõ từng bước** (good food nearby, every step clear).

## Principles

When two options both look right, pick the one higher in this list.

1. **Clear before pretty.** Every screen says where you are, what you can do, and what happens when you press. (NN/g heuristics 1 and 6; Ant Design *Certain*.)
2. **Every message leads to a next step.** Never a bare "Success": say what it means and what comes next. (Polaris; NN/g error-message guidelines.)
3. **Feedback where the eyes are.** Errors sit by the field, results on the thing that changed; nothing important floats in a corner. (Primer, Carbon, NN/g.)
4. **Colour means something.** The brand colour marks the one primary action and the selected item; red, amber, green, blue only report status, always with words or an icon. (Fluent 2, Ant Design.)
5. **One system, every screen.** Same tokens, component names and words on every platform. (Atlassian tokens, Brad Frost.)

## What is here

| Path | What |
|---|---|
| `tokens/color.json` | reference palettes: orange (brand), stone (warm neutrals), green, amber, red, blue |
| `tokens/semantic.json` | colour roles in light and dark (`accent`, `textSecondary`, `warningSubtle`…) |
| `tokens/foundation.json` | type ramp, space, radius, elevation, motion, layout, icons |
| `tokens/contrast.json` | the pairs that must stay readable, checked by the tests |
| `dist/` | generated `tokens.css` (web, `--bb-*` custom properties, `.dark` class), `tokens.ts` (React Native), `tokens.json` |
| `docs/` | the guidelines: [foundations](docs/foundations.md), [content](docs/content.md), [feedback](docs/feedback.md), [components](docs/components.md), [icons](docs/icons.md), [UX checklist](docs/ux-checklist.md) |

## Use

```bash
npm test          # WCAG contrast of every role pair in both themes, type ramp and spacing grid
npm run build     # regenerate dist/
npm run sync      # build, then copy into ../web and ../mobile (inside the bonbon umbrella checkout)
```

Web imports `src/shared/ui/generated/tokens.css`; mobile imports `src/shared/ui/generated/tokens.ts`. Both files carry the commit they came from. Never edit them by hand: change `tokens/`, run `npm run sync`, and commit the generated files in each app.

To theme the kit for another product, replace the `orange` palette in `tokens/color.json` (keep ten steps, with step 600 reaching 4.5:1 against white) and run the tests.

## Sources

Fluent 2 ([color](https://fluent2.microsoft.design/color), [typography](https://fluent2.microsoft.design/typography), [layout](https://fluent2.microsoft.design/layout)) · Ant Design ([values](https://ant.design/docs/spec/values), [colors](https://ant.design/docs/spec/colors), [font](https://ant.design/docs/spec/font)) · [Material 3](https://developer.android.com/develop/ui/compose/designsystems/material3) · Shopify Polaris ([error messages](https://polaris.shopify.com/patterns/error-messages)) · [GitHub Primer on toasts](https://primer.style/accessibility/toasts/) · [IBM Carbon notifications](https://v10.carbondesignsystem.com/patterns/notification-pattern/) · [Atlassian tokens](https://atlassian.design/foundations/tokens/design-tokens/) · Apple HIG ([sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)) · Nielsen Norman Group ([heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/), [error messages](https://www.nngroup.com/articles/error-message-guidelines/)) · Baymard ([checkout](https://baymard.com/blog/checkout-flow-ux-optimization), [product lists](https://baymard.com/blog/current-state-product-list-and-filtering)) · [Mailchimp voice and tone](https://styleguide.mailchimp.com/voice-and-tone/) · [Brad Frost](https://bradfrost.com/blog/post/extending-atomic-design).
