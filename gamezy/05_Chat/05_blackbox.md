#this file refers to the particular section being complete 

@05-UI-01A_ChatListScreen.tsx
Purpose: List of all conversations (DMs, groups, pockets)
Section Role: Message hub
Interactions: Fetches from 05-SV-01_ConversationAPI
Example: WhatsApp chat list - unread badges, last message preview

@05-UI-02A_ConversationScreen.tsx
Purpose: Individual chat interface with real-time messages
Section Role: Communication interface
Interactions: Uses Supabase Realtime; sends via 05-SV-02_MessageAPI
Example: Gifted Chat UI - bubbles, typing indicator

@05-UI-03A_NewChatModal.tsx
Purpose: Create new group or find user to DM
Section Role: Conversation initiation
Interactions: Searches users via 02-SV-01_ProfileDataAPI
Example: Telegram's new chat screen - search bar, contact list

@05-SV-01A_ConversationAPI.ts
Purpose: Manage chat rooms (create, list, update metadata)
Section Role: Room management
Interactions: CRUD on rooms table
Example: Slack workspace API - room creation and membership

@05-SV-02A_MessageAPI.ts
Purpose: Send, retrieve, and broadcast messages
Section Role: Message delivery
Interactions: Inserts to messages table; triggers Realtime broadcast
Example: Supabase Realtime chat - pub/sub pattern

@05-SV-03A_NotificationService.ts
Purpose: Send push notifications for new messages
Section Role: Offline user engagement
Interactions: Uses Expo Push API when user not in app
Example: Expo push notification service - token management
