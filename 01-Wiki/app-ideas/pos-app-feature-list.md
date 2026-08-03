# POS App — Feature List (Base44 Build)

**Summary:** A detailed wishlist for a restaurant and karaoke POS app, written from the point of view of someone actually running the floor. It covers menu structure with multiple price options per item, a manager-first home screen with room and table timers, split billing by what each person ordered, staff PIN login, a customer bell system, voice ordering, and a pricing model based on subscription plus a percentage of sales.

## Key Points
- **Manager view should be the home page**, not the server view.
- One menu item needs several priced options (mix / rocks / shot) instead of a thousand separate items.
- Split the bill by **what each person actually ordered**, not evenly.
- Replace login with **staff PIN** — pick role or name, enter a 4–6 digit PIN.
- Pricing idea: monthly subscription with a cap on simultaneous employees, plus **0.03 of sales**.
- Voice ordering that only reaches the kitchen after the server confirms.

## Menu Structure
- Allow changing the order of categories.
- Add a Notes section for **allergies**, coloured differently from everything else.
- Add subsections for order options, because house and top shelf alcohol have three categories at three prices — mix $11, shot $8, rock $10. We do not want 1,000 items on the menu.

Sections should look like:
```
Casamigos Tequila
  M or mix   $16
  R or rocks $12
  S or shot  $10        (up to 4 options)
```
For food: Pasta dish → Penne / Spaghetti / Linguine / Gluten-free. Tacos → Soft corn / Soft flour / Hard shell.

## Manager Section
- Manager is the only one allowed to change prices or remove items.
- Manager view shows karaoke rooms or tables, a guest count editor, and room/table timers that can pause, resume, stop, add time, leave notes and add orders like the servers.
- Manager sees: live tables, open tickets, longest wait time, what's delayed.
- Employee PINs — add, remove, edit.
- Monthly item sales and time analytics.
- Customizable sound or vibration notifications by the minute or after 5 / 10 / 20 minutes, for servers and kitchen — so the kitchen gets a notification if fries take more than 20 minutes. Each item can effectively have a different alarm.
- Store name and logo, optional.
- Choose background from pictures.

## Billing
- Split bill button for individuals in a room or at a table, so each person pays only for what they ordered.
- Customizable minimum order.
- Let the manager or host pull itemized bills to charge on a credit card machine, or take cash payment.
- Stripe or Square integration, auto tax, tip options.

## Reservations
- Reservation section for upcoming and past changed reservations.
- Manage-reservation section for hosts or managers, auto-filling the table or room so nobody is accidentally seated in a room that is busy.
- Auto-email for reservations running late who do not answer calls or texts, telling them the reservation will be cancelled if they do not reply within a customizable time range.

## Staff Features
- Server sections so servers collect their own tips and it is clear who is accountable for mistakes.
- Employee active work time — shuts off most phone and app notifications and shows how much time they are and are not on the app.
- Replace login with **staff PIN login** optimized for restaurants: staff selects role (server / kitchen / manager) or their name, enters a 4–6 digit PIN, and the system sets role permissions. Managers handle staff and PINs in the admin panel. Seed 3 demo staff accounts with PINs for testing and show where to change them.

## Bell System
Three or four customizable buttons that send the notifications the manager selects — for example:
1. Take order
2. Bring check

## Voice Ordering
Say "order flow" and the AI starts listening, sending the order to the tablet. It does **not** go to the kitchen until the server confirms or edits it, and it notifies if an order is left unfinalized. Meant for taking orders on the fly while holding things. Later upgrade: when the server repeats the order it gets added, including item options like well done or no ice.

## Display and Extras
- Show orders on a TV through HDMI — a tablet may be too small when there are lots of orders.
- Let bars and restaurants run their own ads.
- Karaoke room and table timers linked to the POS.
- Marketing automation.
- Order notifications, with sound and/or vibrate.

## Pricing Model
- Monthly subscription with a limit on how many employees can use it at once.
- Take **0.03 of sales**.
- Free tier takes orders like a notepad but does not send to the kitchen and has no analytics.
- Charge for a server or extra kitchen screen.

## Related Notes
- [[closing-checklist-master|Closing Checklist — Master]]
- [[daily-sales-sheet|Daily Sales Sheet]]

---
**Source:** `../../03-Archive/2026-05-17-Base44_260418_051721.pdf`
