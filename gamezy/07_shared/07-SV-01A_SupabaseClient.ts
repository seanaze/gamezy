/**
 * @fileoverview Supabase client configuration
 * @description Centralized Supabase client setup with authentication and type safety
 */

import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Config, DevUtils } from './07-SV-02A_Config'
import type { Database } from './07-TY-02A_DatabaseTypes'

// Type-safe Supabase client with proper configuration
export const supabase = createClient<Database>(
  Config.SUPABASE_URL,
  Config.SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false, // Disable for React Native
    },
    global: {
      headers: {
        'X-Client-Info': 'gamezy-mobile',
        'X-Environment': Config.ENVIRONMENT,
      },
    },
  }
)

// Initialize client with debugging if enabled
if (Config.DEBUG_MODE) {
  DevUtils.log('Supabase client initialized', {
    url: Config.SUPABASE_URL,
    environment: Config.ENVIRONMENT,
  })
}

