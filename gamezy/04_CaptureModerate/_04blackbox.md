#this file refers to the particular section being complete 

@04-UI-01A_DualCameraView.tsx
Purpose: Split-screen camera interface for simultaneous front/back capture
Section Role: Core content creation UI
Interactions: Uses Expo Camera API; passes images to 04-UI-02
Example: BeReal Camera Screen - split preview, tap to capture

@04-UI-02A_PostReviewModal.tsx
Purpose: Preview captured photos with post/retry/cancel options
Section Role: Content quality gate
Interactions: Calls 04-SV-01_PhotoUploader on confirm
Example: Instagram story preview - full-screen review before sharing

@04-UI-03A_GameSelector.tsx
Purpose: Dropdown/picker to tag which game the photo represents
Section Role: Content categorization
Interactions: Lists games from 03-SV-03_GameCatalogAPI
Example: YouTube's category selector during upload

@04-SV-01A_PhotoUploader.ts
Purpose: Upload images to storage, create post record
Section Role: Content persistence
Interactions: Writes to storage + posts table; triggers 04-AI-01
Example: Cloudinary upload API - multipart handling

@04-AI-01A_ModerateContent.ts
Purpose: Check images for NSFW/inappropriate content
Section Role: Safety filter
Interactions: Calls Google Vision SafeSearch or similar
Example: Discord's image moderation - automatic NSFW detection

@04-AI-02A_GameClassifier.ts
Purpose: Identify which game appears in back camera photo
Section Role: Auto-categorization
Interactions: Uses ML model to match against 25 games
Example: Google Lens game identification - returns game title with confidence

@04-AI-03A_PocketTrigger.ts
Purpose: Update user's game stats and pocket tier after verified post
Section Role: Progression system
Interactions: Increments counters; may send "level up" notification
Example: Duolingo streak counter - immediate feedback on progress
