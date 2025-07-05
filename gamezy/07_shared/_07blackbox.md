#this file refers to the particular section being complete 

@07-NV-01A_TabNavigator.tsx
Purpose: Bottom tab bar with Profile, Pockets, Chat icons
Section Role: Primary app navigation
Interactions: Wraps all feature screens
Example: React Navigation bottom tabs - Instagram-style navigation

@07-NV-02A_AuthNavigator.tsx
Purpose: Switch between auth flow and main app based on session
Section Role: Root navigation logic
Interactions: Checks 01-UI-01_AuthProvider state
Example: Standard auth flow pattern - conditional stack rendering

@07-UI-01A_SharedComponents.tsx
Purpose: Reusable UI elements (Avatar, Button, Card)
Section Role: Design system
Interactions: Imported across all features
Example: React Native Elements - component library

@07-SV-01A_SupabaseClient.ts
Purpose: Initialize and export configured Supabase instance
Section Role: Database connection
Interactions: Used by all SV files
Example: Supabase client setup - with environment keys

@07-SV-02A_Config.ts
Purpose: Environment variables and app constants
Section Role: Configuration management
Interactions: Imported for API keys, URLs
Example: React Native Config - .env management

@07-UT-01A_ValidationUtils.ts
Purpose: Cross-cutting validation utilities and form validators
Section Role: Shared validation logic
Interactions: Used by all forms and input validation
Example: Email validation, password strength, phone number formats

@07-UT-02A_DateUtils.ts
Purpose: Date formatting, parsing, and manipulation utilities
Section Role: Shared date/time operations
Interactions: Used for birthday, timestamps, relative dates
Example: Date formatting, time ago, timezone handling

@07-TY-01A_EnvTypes.d.ts
Purpose: Environment variable type definitions
Section Role: Type safety for configuration
Interactions: Used by config files and environment access
Example: Process.env typings, API endpoint types

@07-TY-02A_DatabaseTypes.d.ts
Purpose: Database schema type definitions
Section Role: Type safety for database operations
Interactions: Used by all service files and database queries
Example: Supabase generated types, table schemas

@07-MW-01A_ApiInterceptors.ts
Purpose: API request/response interceptors and middleware
Section Role: Cross-cutting API concerns
Interactions: Used by all service files for auth, logging, error handling
Example: Auth token injection, request logging, error transformation

@07-TE-01A_SharedComponents.test.tsx
Purpose: Unit tests for shared UI components
Section Role: Testing reusable component library
Interactions: Tests Avatar, Button, Card components
Example: React Testing Library - component library testing
