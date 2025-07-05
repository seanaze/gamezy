#this file refers to the particular section being complete 

@01-UI-01A_AuthProvider.tsx
Purpose: Wraps entire app with Supabase authentication context, managing user session state (elaborate)
Section Role: Foundation for all auth-dependent features
Interactions: Consumed by all protected screens; initializes Supabase client
Example: Supabase React Native Auth Context - provides useAuth() hook pattern (elaborate)

@01-UI-02A_SocialLoginButtons.tsx
Purpose: Reusable component rendering "Sign in with Apple" and "Sign in with Google" buttons
Section Role: Visual auth triggers for WelcomeScreen
Interactions: Calls Expo AuthSession → passes tokens to 01-SV-01_AuthWebhook
Example: Expo Apple Authentication Button combined with branded button styling from Kippo's login screen

@01-UI-03A_WelcomeScreen.tsx
Purpose: Initial app screen with logo, tagline, and social login buttons
Section Role: Entry point for new/logged-out users
Interactions: Renders 01-UI-02_SocialLoginButtons; navigates to 01-UI-04_ProfileWizardPager on first login
Example: Kippo's welcome screen - dark background, centered logo, OAuth buttons at bottom

@01-UI-04A_ProfileWizardPager.tsx
Purpose: Container managing 6-step profile creation flow with progress indicator
Section Role: Orchestrates onboarding substeps
Interactions: Wraps steps 01-UI-05 through 01-UI-10; calls 01-SV-02_UserProfileAPI on completion
Example: React Native Onboarding Swiper - dots indicator, swipe navigation.

@01-UI-05A_WizardStep_Nickname.tsx 
Purpose: Text input screen for choosing username/nickname
Section Role: Step 1 of profile creation
Interactions: Validates uniqueness via 01-SV-02_UserProfileAPI
Example: Discord's username selection - large text input, real-time availability check

@01-UI-06A_WizardStep_ProfilePhoto.tsx
Purpose: Camera/gallery picker for profile picture upload
Section Role: Step 2 of profile creation
Interactions: Uses Expo ImagePicker; uploads via 01-SV-03_StorageUploader
Example: Supabase Avatar Upload Component - circular preview, tap to change

@01-UI-07A_WizardStep_Gender.tsx
Purpose: Gender selection screen with predefined options
Section Role: Step 3 of profile creation
Interactions: Stores selection in local state for batch save
Example: Bumble's gender selection - radio buttons or picker wheel

@01-UI-08A_WizardStep_Birthday.tsx
Purpose: Date picker for birth date (age verification)
Section Role: Step 4 of profile creation
Interactions: Validates minimum age requirement
Example: Instagram's birthday picker - scrollable date wheels

@01-UI-09A_WizardStep_Permissions.tsx
Purpose: Request location, notifications, camera permissions with explanations
Section Role: Step 5 of profile creation
Interactions: Uses Expo Permissions API; stores consent status
Example: BeReal's permission flow - explains why each permission enhances experience

@01-UI-10A_WizardStep_Complete.tsx
Purpose: Success screen confirming account creation
Section Role: Final onboarding step
Interactions: Triggers navigation to main app (02-UI-01_ProfileHomeScreen)
Example: TikTok's "You're all set!" screen with confetti animation

@01-SV-01A_AuthWebhook.ts
Purpose: Validates OAuth tokens from Apple/Google, creates Supabase session
Section Role: Server-side auth handler
Interactions: Receives tokens from 01-UI-02; creates user record in DB
Example: Supabase Edge Function for Apple Sign In - token exchange pattern

@01-SV-02A_UserProfileAPI.ts
Purpose: CRUD operations for user profiles (create, check username, update)
Section Role: Profile data persistence layer
Interactions: Called by wizard steps; writes to profiles table
Example: Supabase Profile Management - upsert pattern

@01-SV-03A_StorageUploader.ts
Purpose: Handles image uploads to Supabase Storage with resizing
Section Role: Media persistence service
Interactions: Used by profile photo and dual photo features
Example: Supabase Storage Upload - bucket management, URL generation

@01-UT-01A_ProfileValidation.ts
Purpose: Validation utilities specific to profile creation and editing
Section Role: Profile data validation
Interactions: Used by wizard steps and profile API
Example: Username validation, age verification, bio length checks

@01-TE-01A_AuthProvider.test.tsx
Purpose: Unit tests for authentication context provider
Section Role: Testing authentication flow
Interactions: Tests user session management and auth state
Example: Jest/React Testing Library - context provider testing




