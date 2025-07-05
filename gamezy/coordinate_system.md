This document defines how to build the Gamezy codebase systematically. Files follow a coordinate naming system (Feature-Layer-Index_Name) that makes their purpose and relationships clear. The LLM must build in strict order: first create shared foundation files (07-*), then build each feature completely (01-06) by creating all UI files, then services, then AI/DB, then connecting them. The naming system enables systematic progress.

Codebase Navigation System

## File Naming Format
`<Feature>-<Layer>-<Index>_<Name>.<ext>`

- **Feature** (01-07): Major app section
- **Layer** (UI/SV/AI/DB/NV): Execution environment  
- **Index** (01-99): Sequential within feature+layer
- **Name**: PascalCase description

Example: `01-UI-03_WelcomeScreen.tsx`

## Build Order (Follow Exactly)

### Phase 1: Foundation First
07-SV-01 → 07-SV-02 → 07-UI-01 → 07-NV-01 → 07-NV-02

### Phase 2: Each Feature (01-06)

Build all UI:     XX-UI-01 → XX-UI-02 → ... → XX-UI-N
Build all SV:     XX-SV-01 → XX-SV-02 → ... → XX-SV-N
Build AI/DB:      XX-AI-* → XX-DB-* (if any)
Connect pairs:    UI↔SV, SV→AI, AI→DB


### Phase 3: Test Integration
Trace complete user flows across features

## Navigation Patterns

**[VERTICAL]** - Complete one layer before next
01-UI-01 → 01-UI-02 → 01-UI-03 ✓ then move to SV

**[HORIZONTAL]** - Connect layer pairs
01-UI-03 ↔ 01-SV-01 (same feature, paired function)

**[CROSS]** - Follow data between features
02-UI-01 → 02-SV-01 → 03-SV-01 (crosses to feature 03)

## Layer Rules

| From | → Can Call | ❌ Cannot Call |
|------|------------|----------------|
| UI   | UI, SV     | AI, DB         |
| SV   | SV, AI, DB | -              |
| AI   | DB only    | UI, SV         |
| DB   | -          | Everything     |
| NV   | UI only    | SV, AI, DB     |

**AI Layer Note**: AI processes data and returns results via database updates or completion flags. SV polls/checks these results rather than AI calling back.

## Framework Files (Edit Directly)

These live outside the coordinate system:

| File | When to Edit |
|------|--------------|
| `app.json` | App config, permissions, bundle ID |
| `package.json` | Add/remove dependencies |
| `.env.local` | API keys, Supabase URLs |
| `tsconfig.json` | TypeScript settings |
| `App.tsx` | Root component, provider setup |
| `assets/*` | Images, game covers, icons |

**Rule**: These files don't follow naming pattern - edit as needed for configuration.

## Quick Checks

### Missing Files?
- Sequential gaps: 01, 02, 04 (where's 03?)
- Layer gaps: UI exists but no SV

### Orphaned Files?
- UI with no SV support
- AI with no SV caller
- Files not imported anywhere