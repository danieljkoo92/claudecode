# Pricing Strategy — SMB Growth

**Summary:** Extracted from bulk notes file.

STEP 7 — CREATE DATA ADAPTERS

Tell Codex:

“Create data adapters so the app can read collected data, imported CSV, or imported JSON.”

Codex should create:

/src/lib/adapters/playwrightBasketballReferenceAdapter.ts
/src/lib/adapters/playwrightEspnAdapter.ts
/src/lib/adapters/playwrightNbaDotComAdapter.ts
/src/lib/adapters/csvImportAdapter.ts
/src/lib/adapters/jsonImportAdapter.ts
/src/lib/adapters/localProcessedDataAdapter.ts

Do not create a mockDataAdapter.

The app should load data in this order:

1. Local processed data
2. Imported CSV
3. Imported JSON
4. Blank empty state

No mock fallback.

---
**Source:** `../../../03-Archive/2026-05-17-allnotes.txt`
