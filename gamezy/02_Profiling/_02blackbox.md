#this file refers to the particular section being complete 

@02-UI-01A_ProfileHomeScreen.tsx
Purpose: Main profile display with user info, pockets carousel, and photo timeline
Section Role: Central hub of user's identity and content
Interactions: Fetches data via 02-SV-01_ProfileDataAPI; navigates to pockets/chat
Example: Instagram Profile Layout merged with Kippo's card carousels

@02-UI-02A_PocketsCarousel.tsx
Purpose: Horizontal scrolling display of user's active game communities
Section Role: Quick access to gaming identity
Interactions: Renders data from 03-SV-01_PocketMembershipAPI
Example: Netflix's "Continue Watching" carousel - horizontal scroll, preview cards

@02-UI-03A_PhotoTimeline.tsx
Purpose: Grid/list view of user's dual photo posts
Section Role: Visual history of gaming moments
Interactions: Fetches from 02-SV-02_PostsAPI; each item shows front+back photos
Example: BeReal Profile Grid - dual photo thumbnails in grid

@02-UI-04A_EditProfileModal.tsx
Purpose: Form for updating nickname, bio, profile photo
Section Role: Profile management interface
Interactions: Pre-fills from 02-SV-01; saves changes via same
Example: Twitter's "Edit Profile" modal - inline editing with save/cancel

@02-UI-05A_CaptureButton.tsx
Purpose: Floating action button that initiates dual photo capture
Section Role: Primary content creation trigger
Interactions: Long-press navigates to 04-UI-01_DualCameraView
Example: Snapchat's capture button - prominent circle, hold gesture

@02-SV-01A_ProfileDataAPI.ts
Purpose: Fetches complete user profile including stats and settings
Section Role: Profile data aggregation
Interactions: Joins profiles + user_game_stats tables
Example: GraphQL user query pattern returning nested data

@02-SV-02A_PostsAPI.ts
Purpose: CRUD for user's posts with pagination
Section Role: Content management service
Interactions: Queries posts table; triggers 04-AI-03_PocketTrigger on new posts
Example: Instagram's infinite scroll API - cursor-based pagination

@02-TE-01A_ProfileHomeScreen.test.tsx
Purpose: Unit tests for profile home screen component
Section Role: Testing profile display and navigation
Interactions: Tests data loading, carousel interaction, timeline display
Example: React Testing Library - component integration testing

