# Is this UX good yet? 60 questions

Run it on a flow (order food, take an order, pay, open a shop), not on a single screen. Answer each with yes / no / not applicable and a note. Several reviewers find far more problems than one (NN/g). Sources: Nielsen's ten heuristics, NN/g's error-message guidelines, Baymard's e-commerce research, WCAG 2.2, and three points of view: customer, shop owner, product owner.

## Status and feedback (heuristic 1)

1. Does every screen show where the user is (title, selected item, breadcrumb)?
2. Does every action respond within 100 ms, with progress shown beyond 1 s?
3. Does the result appear where the user is looking, not in a corner?
4. Are order, payment and shop states shown in words, not only colour?
5. Is stale or loading data distinguishable (skeleton, "cập nhật lúc…")?

## Real-world language (heuristic 2)

6. Are the words those of customers and cooks, not of the system (webhook, payload, status)?
7. Are money, time, date and distance written the Vietnamese way (95.000 ₫, 14:02, 20/11, 350 m)?
8. Do the steps follow real life (choose → cart → address → pay)?
9. Does each icon suggest its action, and is one action always one icon?

## Control and freedom (heuristic 3)

10. Does every sub-page have the same, obvious way back?
11. Can undoable actions be undone (Hoàn tác)?
12. Do irreversible actions ask first and state the consequence?
13. Can a long flow be left without losing what was typed?

## Consistency (heuristic 4)

14. Does a component look and behave the same on web and mobile?
15. Are all colours, sizes and spacing from tokens?
16. Is the primary button always in the same place, and only one per screen?
17. Are platform conventions kept (iOS/Android back, Esc on web)?

## Error prevention (heuristic 5)

18. Do inputs use formats, suggestions and defaults that make mistakes hard?
19. Does each input open the right keyboard (numbers, phone, email)?
20. Is a submit button disabled only when it must be, and does it say what is missing?
21. Does the system check before the user invests effort (out of delivery range, sold out)?

## Recognition over recall (heuristic 6)

22. Is everything needed for a decision on the same screen (total, fees, time)?
23. Are previous choices remembered (address, payment method, usual dishes)?
24. Are labels always visible, not placeholders that vanish while typing?

## Efficiency (heuristic 7)

25. Do regulars have shortcuts (reorder, quick replies, keyboard shortcuts on web)?
26. Does the main flow take the fewest steps possible?
27. Can long lists be searched and filtered by the attributes shown in each item? (Baymard: 38% of sites cannot.)

## Minimalism (heuristic 8)

28. Does each screen have one purpose and one primary action?
29. Is the brand colour used only for the primary action and the selected item?
30. Is there no text, block or border that is only decoration?
31. Does each screen use three to five type sizes at most?

## Errors and recovery (heuristic 9, NN/g)

32. Is the error message next to its cause?
33. Does it name the exact problem in plain words, without codes?
34. Does it offer a concrete, low-effort fix?
35. Does it avoid blaming the user and avoid jokes?
36. Is the user's input kept after an error?
37. Does losing the connection get its own message and an automatic retry?

## Help (heuristic 10)

38. Is help available in context (a ? next to a field, help text under it)?
39. Is the help centre searchable by task, with concrete steps?
40. Is there always a way to reach a person when self-service fails?

## Messages with a next step

41. Does every confirmation say what it means and what happens next? ("Thành công rồi thì sao?")
42. Are toasts used only for undoable actions, with **Hoàn tác**, for at least 6 s?
43. Do lasting conditions (paused, debt, under review) show a banner with an action that resolves them?
44. Does finishing a flow lead to a result page with a way forward?

## E-commerce (Baymard)

45. Is the final total (fees and discounts included) shown before the order button?
46. Can dishes, prices and shops be browsed without signing in?
47. Are there at least two ways to pay, each saying what happens after paying?
48. After ordering, is there a timeline with an estimated time?
49. Do image, name, price and rating in a list item suffice to decide without opening it?

## Accessibility (WCAG 2.2)

50. Does text reach 4.5:1, and large text and UI parts 3:1?
51. Are touch targets at least 44 × 44?
52. Is no information conveyed by colour alone?
53. Can everything be done with a keyboard, with a visible focus ring (web)?
54. Does the layout hold at 200 % text (web) and the largest font size (mobile)?
55. Do screen readers announce icon buttons and status changes?

## Shop owner and product owner

56. Does the owner see what needs doing the moment the app opens (waiting orders, complaints, debt)?
57. Can every money figure be traced to its source (commission, fees, balance)?
58. Are sensitive changes (payout account, pausing) confirmed and reported back?
59. Does it work with busy hands and eyes (large buttons, sound, vibration)?
60. Is each design change tied to a metric (successful orders, time to accept)?
