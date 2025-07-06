#literally every file it needs to create

Complete File Descriptions
01_Onboarding Feature

01-UI-01A_AuthProvider.tsx

Purpose: Wraps entire app with Supabase authentication context, managing user session state
Section Role: Foundation for all auth-dependent features
Interactions: Consumed by all protected screens; initializes Supabase client
Example: Supabase React Native Auth Context - provides useAuth() hook pattern

01-UI-02A_SocialLoginButtons.tsx

Purpose: Reusable component rendering "Sign in with Google" button
Section Role: Visual auth trigger for WelcomeScreen
Interactions: Calls Expo AuthSession → passes tokens to 01-SV-01_AuthWebhook
Example: Google OAuth Button with branded button styling from Kippo's login screen

01-UI-03A_WelcomeScreen.tsx

Purpose: Initial app screen with logo, tagline, and social login buttons
Section Role: Entry point for new/logged-out users
Interactions: Renders 01-UI-02_SocialLoginButtons; navigates to 01-UI-04_ProfileWizardPager on first login
Example: Kippo's welcome screen - dark background, centered logo, OAuth buttons at bottom

01-UI-04A_ProfileWizardPager.tsx

Purpose: Container managing 6-step profile creation flow with progress indicator
Section Role: Orchestrates onboarding substeps
Interactions: Wraps steps 01-UI-05 through 01-UI-10; calls 01-SV-02_UserProfileAPI on completion
Example: React Native Onboarding Swiper - dots indicator, swipe navigation

01-UI-05A_WizardStep_Nickname.tsx

Purpose: Text input screen for choosing username/nickname
Section Role: Step 1 of profile creation
Interactions: Validates uniqueness via 01-SV-02_UserProfileAPI
Example: Discord's username selection - large text input, real-time availability check

01-UI-06A_WizardStep_ProfilePhoto.tsx

Purpose: Camera/gallery picker for profile picture upload
Section Role: Step 2 of profile creation
Interactions: Uses Expo ImagePicker; uploads via 01-SV-03_StorageUploader
Example: Supabase Avatar Upload Component - circular preview, tap to change

01-UI-07A_WizardStep_Gender.tsx

Purpose: Gender selection screen with predefined options
Section Role: Step 3 of profile creation
Interactions: Stores selection in local state for batch save
Example: Bumble's gender selection - radio buttons or picker wheel

01-UI-08A_WizardStep_Birthday.tsx

Purpose: Date picker for birth date (age verification)
Section Role: Step 4 of profile creation
Interactions: Validates minimum age requirement
Example: Instagram's birthday picker - scrollable date wheels

01-UI-09A_WizardStep_Permissions.tsx

Purpose: Request location, notifications, camera permissions with explanations
Section Role: Step 5 of profile creation
Interactions: Uses Expo Permissions API; stores consent status
Example: BeReal's permission flow - explains why each permission enhances experience

01-UI-10A_WizardStep_Complete.tsx

Purpose: Success screen confirming account creation
Section Role: Final onboarding step
Interactions: Triggers navigation to main app (02-UI-01_ProfileHomeScreen)
Example: TikTok's "You're all set!" screen with confetti animation

01-SV-01A_AuthWebhook.ts

Purpose: Validates OAuth tokens from Google, creates Supabase session
Section Role: Server-side auth handler
Interactions: Receives tokens from 01-UI-02; creates user record in DB
Example: Supabase Edge Function for Google Sign In - token exchange pattern

01-SV-02A_UserProfileAPI.ts

Purpose: CRUD operations for user profiles (create, check username, update)
Section Role: Profile data persistence layer
Interactions: Called by wizard steps; writes to profiles table
Example: Supabase Profile Management - upsert pattern

01-SV-03A_StorageUploader.ts

Purpose: Handles image uploads to Supabase Storage with resizing
Section Role: Media persistence service
Interactions: Used by profile photo and dual photo features
Example: Supabase Storage Upload - bucket management, URL generation

01-UT-01A_ProfileValidation.ts

Purpose: Validation utilities specific to profile creation and editing
Section Role: Profile data validation
Interactions: Used by wizard steps and profile API
Example: Username validation, age verification, bio length checks

01-TE-01A_AuthProvider.test.tsx

Purpose: Unit tests for authentication context provider
Section Role: Testing authentication flow
Interactions: Tests user session management and auth state
Example: Jest/React Testing Library - context provider testing

02_Profile Feature
02-UI-01A_ProfileHomeScreen.tsx

Purpose: Main profile display with user info, pockets carousel, and photo timeline
Section Role: Central hub of user's identity and content
Interactions: Fetches data via 02-SV-01_ProfileDataAPI; navigates to pockets/chat
Example: Instagram Profile Layout merged with Kippo's card carousels

02-UI-02A_PocketsCarousel.tsx

Purpose: Horizontal scrolling display of user's active game communities
Section Role: Quick access to gaming identity
Interactions: Renders data from 03-SV-01_PocketMembershipAPI
Example: Netflix's "Continue Watching" carousel - horizontal scroll, preview cards

02-UI-03A_PhotoTimeline.tsx

Purpose: Grid/list view of user's dual photo posts
Section Role: Visual history of gaming moments
Interactions: Fetches from 02-SV-02_PostsAPI; each item shows front+back photos
Example: BeReal Profile Grid - dual photo thumbnails in grid

02-UI-04A_EditProfileModal.tsx

Purpose: Form for updating nickname, bio, profile photo
Section Role: Profile management interface
Interactions: Pre-fills from 02-SV-01; saves changes via same
Example: Twitter's "Edit Profile" modal - inline editing with save/cancel

02-UI-05A_CaptureButton.tsx

Purpose: Floating action button that initiates dual photo capture
Section Role: Primary content creation trigger
Interactions: Long-press navigates to 04-UI-01_DualCameraView
Example: Snapchat's capture button - prominent circle, hold gesture

02-SV-01A_ProfileDataAPI.ts

Purpose: Fetches complete user profile including stats and settings
Section Role: Profile data aggregation
Interactions: Joins profiles + user_game_stats tables
Example: GraphQL user query pattern returning nested data

02-SV-02A_PostsAPI.ts

Purpose: CRUD for user's posts with pagination
Section Role: Content management service
Interactions: Queries posts table; triggers 04-AI-03_PocketTrigger on new posts
Example: Instagram's infinite scroll API - cursor-based pagination

02-TE-01A_ProfileHomeScreen.test.tsx

Purpose: Unit tests for profile home screen component
Section Role: Testing profile display and navigation
Interactions: Tests data loading, carousel interaction, timeline display
Example: React Testing Library - component integration testing

03_Pockets Feature
03-UI-01A_GameExplorer.tsx

Purpose: Browse/search interface for 25 supported games
Section Role: Discovery entry point
Interactions: Lists games from 03-SV-03_GameCatalogAPI
Example: Twitch's game directory - grid of game covers with titles

03-UI-02A_PocketTierList.tsx

Purpose: Shows 5 tier levels (A-Z) for selected game with requirements
Section Role: Community progression visualization
Interactions: Displays tier data from 03-SV-01_PocketMembershipAPI
Example: Clash Royale's Arena Progression - vertical tier list with unlock requirements

03-UI-03A_PocketMemberGrid.tsx

Purpose: Grid of profile cards for users in specific pocket
Section Role: Community member discovery
Interactions: Fetches members via 03-SV-02_PocketMembersAPI
Example: Discord member list - avatars with status indicators

03-UI-04A_PocketChatView.tsx

Purpose: Embedded chat interface for pocket community
Section Role: In-pocket communication
Interactions: Reuses 05-UI-02_ConversationScreen with pocket context
Example: Twitch chat alongside stream - real-time community messages

03-SV-01A_PocketMembershipAPI.ts

Purpose: Calculate and update user's pocket tiers based on photo count
Section Role: Tier assignment logic
Interactions: Triggered by new posts; updates pocket_members table
Example: Reddit karma thresholds - automatic role assignment

03-SV-02A_PocketMembersAPI.ts

Purpose: Query pocket members with filters (online, new, etc.)
Section Role: Community roster service
Interactions: Joins pocket_members with profiles for rich data
Example: Dating app user queue - filtered, sorted user lists

03-SV-03A_GameCatalogAPI.ts

Purpose: Serve static list of 25 games with metadata
Section Role: Game database service
Interactions: May include trending data or user counts
Example: Steam's game catalog API - title, image, player count

03-DB-01A_schema_pockets.sql

Purpose: Database tables for games, tiers, and membership
Section Role: Pocket system data model
Interactions: Defines foreign keys, indices, tier thresholds
Example: Supabase schema example with RLS policies

03-TY-01A_PocketTypes.d.ts

Purpose: TypeScript definitions for pocket system entities
Section Role: Type safety for pocket data
Interactions: Used by all pocket-related components and services
Example: Game, Tier, Membership interfaces and enums

03-TE-01A_GameExplorer.test.tsx

Purpose: Unit tests for game explorer component
Section Role: Testing game discovery and selection
Interactions: Tests game grid rendering, search functionality
Example: React Testing Library - list component testing

04_CaptureModeration Feature
04-UI-01A_DualCameraView.tsx

Purpose: Split-screen camera interface for simultaneous front/back capture
Section Role: Core content creation UI
Interactions: Uses Expo Camera API; passes images to 04-UI-02
Example: BeReal Camera Screen - split preview, tap to capture

04-UI-02A_PostReviewModal.tsx

Purpose: Preview captured photos with post/retry/cancel options
Section Role: Content quality gate
Interactions: Calls 04-SV-01_PhotoUploader on confirm
Example: Instagram story preview - full-screen review before sharing

04-UI-03A_GameSelector.tsx

Purpose: Dropdown/picker to tag which game the photo represents
Section Role: Content categorization
Interactions: Lists games from 03-SV-03_GameCatalogAPI
Example: YouTube's category selector during upload

04-SV-01A_PhotoUploader.ts

Purpose: Upload images to storage, create post record
Section Role: Content persistence
Interactions: Writes to storage + posts table; triggers 04-AI-01
Example: Cloudinary upload API - multipart handling

04-AI-01A_ModerateContent.ts

Purpose: Check images for NSFW/inappropriate content
Section Role: Safety filter
Interactions: Calls Google Vision SafeSearch or similar
Example: Discord's image moderation - automatic NSFW detection

04-AI-02A_GameClassifier.ts

Purpose: Identify which game appears in back camera photo
Section Role: Auto-categorization
Interactions: Uses ML model to match against 25 games
Example: Google Lens game identification - returns game title with confidence

04-AI-03A_PocketTrigger.ts

Purpose: Update user's game stats and pocket tier after verified post
Section Role: Progression system
Interactions: Increments counters; may send "level up" notification
Example: Duolingo streak counter - immediate feedback on progress

04-UT-01A_ImageProcessing.ts

Purpose: Image utilities for resizing, compression, format conversion
Section Role: Media processing helpers
Interactions: Used by camera view and photo uploader
Example: Image manipulation utilities - resize, compress, crop

04-TE-01A_DualCameraView.test.tsx

Purpose: Unit tests for dual camera interface
Section Role: Testing camera functionality and capture flow
Interactions: Tests camera permissions, photo capture, review flow
Example: React Testing Library - camera component testing

05_Chat Feature
05-UI-01A_ChatListScreen.tsx

Purpose: List of all conversations (DMs, groups, pockets)
Section Role: Message hub
Interactions: Fetches from 05-SV-01_ConversationAPI
Example: WhatsApp chat list - unread badges, last message preview

05-UI-02A_ConversationScreen.tsx

Purpose: Individual chat interface with real-time messages
Section Role: Communication interface
Interactions: Uses Supabase Realtime; sends via 05-SV-02_MessageAPI
Example: Gifted Chat UI - bubbles, typing indicator

05-UI-03A_NewChatModal.tsx

Purpose: Create new group or find user to DM
Section Role: Conversation initiation
Interactions: Searches users via 02-SV-01_ProfileDataAPI
Example: Telegram's new chat screen - search bar, contact list

05-SV-01A_ConversationAPI.ts

Purpose: Manage chat rooms (create, list, update metadata)
Section Role: Room management
Interactions: CRUD on rooms table
Example: Slack workspace API - room creation and membership

05-SV-02A_MessageAPI.ts

Purpose: Send, retrieve, and broadcast messages
Section Role: Message delivery
Interactions: Inserts to messages table; triggers Realtime broadcast
Example: Supabase Realtime chat - pub/sub pattern

05-SV-03A_NotificationService.ts

Purpose: Send push notifications for new messages
Section Role: Offline user engagement
Interactions: Uses Expo Push API when user not in app
Example: Expo push notification service - token management

05-TE-01A_ConversationScreen.test.tsx

Purpose: Unit tests for conversation screen component
Section Role: Testing chat interface and real-time messaging
Interactions: Tests message sending, receiving, UI updates
Example: React Testing Library - real-time component testing

06_Matchmaking Feature
06-AI-01A_UserEmbeddings.ts

Purpose: Generate vector representations of user gaming profiles
Section Role: User similarity computation
Interactions: Reads from user_game_stats; outputs to embeddings table
Example: Spotify's music taste vectors - profile as numbers

06-AI-02A_SimilarityEngine.ts

Purpose: Find nearest neighbors in embedding space
Section Role: Match computation
Interactions: Uses pgvector or similar for cosine similarity
Example: Dating app compatibility scores - percentage match

06-SV-01A_MatchSuggestionsAPI.ts

Purpose: Return ranked list of suggested connections
Section Role: Recommendation endpoint
Interactions: Combines 06-AI-02 results with filtering rules
Example: LinkedIn's "People you may know" - filtered suggestions

07_Shared Feature
07-NV-01A_TabNavigator.tsx

Purpose: Bottom tab bar with Profile, Pockets, Chat icons
Section Role: Primary app navigation
Interactions: Wraps all feature screens
Example: React Navigation bottom tabs - Instagram-style navigation

07-NV-02A_AuthNavigator.tsx

Purpose: Switch between auth flow and main app based on session
Section Role: Root navigation logic
Interactions: Checks 01-UI-01_AuthProvider state
Example: Standard auth flow pattern - conditional stack rendering

07-UI-01A_SharedComponents.tsx

Purpose: Reusable UI elements (Avatar, Button, Card)
Section Role: Design system
Interactions: Imported across all features
Example: React Native Elements - component library

07-SV-01A_SupabaseClient.ts

Purpose: Initialize and export configured Supabase instance
Section Role: Database connection
Interactions: Used by all SV files
Example: Supabase client setup - with environment keys

07-SV-02A_Config.ts

Purpose: Environment variables and app constants
Section Role: Configuration management
Interactions: Imported for API keys, URLs
Example: React Native Config - .env management

07-UT-01A_ValidationUtils.ts

Purpose: Cross-cutting validation utilities and form validators
Section Role: Shared validation logic
Interactions: Used by all forms and input validation
Example: Email validation, password strength, phone number formats

07-UT-02A_DateUtils.ts

Purpose: Date formatting, parsing, and manipulation utilities
Section Role: Shared date/time operations
Interactions: Used for birthday, timestamps, relative dates
Example: Date formatting, time ago, timezone handling

07-TY-01A_EnvTypes.d.ts

Purpose: Environment variable type definitions
Section Role: Type safety for configuration
Interactions: Used by config files and environment access
Example: Process.env typings, API endpoint types

07-TY-02A_DatabaseTypes.d.ts

Purpose: Database schema type definitions
Section Role: Type safety for database operations
Interactions: Used by all service files and database queries
Example: Supabase generated types, table schemas

07-MW-01A_ApiInterceptors.ts

Purpose: API request/response interceptors and middleware
Section Role: Cross-cutting API concerns
Interactions: Used by all service files for auth, logging, error handling
Example: Auth token injection, request logging, error transformation

07-TE-01A_SharedComponents.test.tsx

Purpose: Unit tests for shared UI components
Section Role: Testing reusable component library
Interactions: Tests Avatar, Button, Card components
Example: React Testing Library - component library testing