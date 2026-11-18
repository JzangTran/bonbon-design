# Feedback

Pick the **lowest** rung that the user cannot miss. Toasts that vanish are the last resort, not the default: they appear far from where the user looks, they are hard for screen readers, and people learn to ignore them (Primer, Carbon, NN/g).

| Rung | Component | When | Lifetime |
|---|---|---|---|
| 1 · In place | the control itself | The result is visible on the thing that changed: "Lưu" becomes "Đã lưu lúc 14:02", a dish shows "Hết hôm nay", an order row changes its status badge. Most saves and toggles. | Until the next change |
| 2 · Inline | `InlineMessage`, field error | Validation, or a result tied to one area of the page. Keep the input. | Until fixed or dismissed |
| 3 · Banner | `Banner` | A condition that affects the whole page or app: shop paused, debt overdue, offline, account under review, maintenance. Always one action that resolves it. | Until the condition ends |
| 4 · Snackbar | `Snackbar` | A background action that can be undone: "Đã xoá món Trà đá · Hoàn tác". One line, one action. Never errors, never information the user must read. | ≥ 6 s, pauses on hover/focus |
| 5 · Dialog or result page | `Dialog`, `ResultPage` | Dialog only to confirm something that cannot be undone, saying exactly what will happen. Finishing a flow (order placed, shop submitted) goes to a result page that says what happens next and offers the way forward. | Until the user acts |

Rules:

- Never two rungs for one event (no toast on top of an inline error).
- Every message follows the [content formula](content.md).
- Status changes are announced to assistive technology (`aria-live="polite"` on web, `accessibilityLiveRegion` on Android, `AccessibilityInfo.announceForAccessibility` on iOS).
- Loading: under 1 s show nothing; 1–10 s a skeleton or spinner in place; over 10 s say what is happening and that the user can leave.

## Notifications (the bell)

Not a side panel. On web the bell opens a **popover** anchored under it: the five newest, each row linking straight to the task it is about, plus **Xem tất cả** to the **Hộp thư** page (filters: Đơn hàng, Thanh toán, Đánh giá, Hệ thống). On mobile the bell opens the Hộp thư page. A notification is marked read when the user opens it or finishes the task it points to. Unread counts cap at 99+.

## Mapping today's toasts

| Today | v5 |
|---|---|
| `toast.success('Đã lưu…')` after a form | Rung 1: the submit button shows "Đã lưu lúc HH:mm" for the rest of the visit; if leaving the page, the next page says it (rung 2). |
| `toast.success('Đã sao chép.')` | Rung 1: the copy button turns into "Đã chép" for 2 s. |
| `toast.error(problemMessage(e))` | Rung 2: `InlineMessage` above the submit button, or the field error. |
| `toast.success('Đã xoá…')` | Rung 4: snackbar with **Hoàn tác** when undo is possible; otherwise rung 1 (the row disappears) with a dialog before. |
| Shop paused / debt / review notice | Rung 3: banner on every workspace page until resolved. |
