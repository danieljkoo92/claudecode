# POS Category Management Spec

**Summary:** A detailed interface specification for how menu categories should behave in the POS app during live service. It replaces number-based ordering with drag-and-drop, makes categories collapsible, adds a lock system so categories can be pinned in place, and lays out items in a compact Excel-style grid. Everything is written for speed during order taking, not for looks.

## Key Points
- Categories are **collapsible, collapsed by default**.
- **Drag-and-drop reordering** replaces the number-based system entirely.
- A **lock/unlock button** pins categories so they cannot be moved accidentally.
- Items sit in a **grid, up to 2 rows visible**, auto-wrapping into columns.
- Order state — category order, lock state, collapse state — must **persist across sessions**.

## 1. Collapsible Categories
Each category (Beer, Soju, Cocktails, Food) must collapse and expand. Default state: **collapsed**. A clear toggle (arrow or +/− icon) sits on the category header. When collapsed, only the category title shows.

## 2. Drag-and-Drop Reordering
Replace the number-based ordering system with drag-and-drop. Each category gets a visible drag handle (≡ icon). Categories and items reorder vertically by dragging.

## 3. Lock / Unlock System
One lock/unlock button in the top left, above the first category, plus one on each category.

- **Locked:** position cannot be changed, dragging disabled.
- **Unlocked:** category can be dragged and reordered.
- Locked categories stay fixed while other categories move around them.

## 4. Grid Layout for Items
Inside each category, items lay out in a flexible grid:
- Up to **2 rows visible at once**, like a compact Excel grid
- Items auto-wrap into columns
- Consistent spacing and alignment
- Responsive — column count adjusts to screen width

## 5. Interaction Behaviour
- Dragging a category shows a visual placeholder
- Smooth animation when repositioning
- **Prevent accidental drag when tapping** — require a slight hold or a drag threshold
- Lock icon clearly changes state

## 6. UI Style
Clean, minimal, fast to use in a live service environment. Large touch targets for mobile and tablet. **Prioritize speed and clarity over decorative design.**

## 7. Data Persistence
Save and persist across sessions:
- Category order
- Lock/unlock state
- Collapse/expand state (optional but preferred)

## Quantity Stepper and Order Timestamps
A separate requirement written alongside this:

> When I hit plus, a number should pop up for every single item. For example: `🗑 − ×1 + `

And every time an order is sent, keep a record and **timestamp it** — so each send is grouped and timestamped as its own batch.

That grouping is what makes it possible to see when each round went in, which is the basis for the kitchen timing alarms described in [[pos-app-feature-list|POS App — Feature List]].

## The Goal, As Written
> Make category management fast, visual, and intuitive during live order taking — removing the need for manual numbering and allowing flexible real-time organization.

## Related Notes
- [[pos-app-feature-list|POS App — Feature List]]
- [[liquor-and-beer-price-list|Liquor, Beer and Wine Price List]]
- [[staff-task-system-blueprint|Staff Task System — Full Blueprint]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
