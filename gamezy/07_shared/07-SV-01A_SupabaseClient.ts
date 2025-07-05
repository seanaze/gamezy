//  I still need descriptions here of what this file does here, and in every folder I should have a directory that maps real examples of what specific file is mean to do!

import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://zcczafkypwtngpnylpcu.supabase.co'
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjY3phZmt5cHd0bmdwbnlscGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MTcwNDksImV4cCI6MjA2NzI5MzA0OX0.bAxqjfhsol-93QnAHyOC_0eOD_P02FyQuEEGFnk8cy8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

