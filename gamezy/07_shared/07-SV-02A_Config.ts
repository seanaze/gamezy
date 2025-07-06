/**
 * @fileoverview Application configuration and environment management
 * @description Centralized configuration with type-safe environment variables
 */

import Constants from 'expo-constants';

// Environment variable types for strict type checking
interface EnvironmentConfig {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  OPENAI_API_KEY?: string;
  GOOGLE_CLOUD_VISION_API_KEY?: string;
  ENVIRONMENT: 'development' | 'staging' | 'production';
  API_BASE_URL: string;
  DEBUG_MODE: boolean;
  ENABLE_FLIPPER: boolean;
}

/**
 * @description Gets environment variable with type checking and validation
 * @param key - Environment variable key
 * @param defaultValue - Optional default value
 * @param required - Whether the variable is required
 */
function getEnvVar(
  key: keyof EnvironmentConfig,
  defaultValue?: string,
  required: boolean = false
): string {
  const value = Constants.expoConfig?.extra?.[key] || process.env[key] || defaultValue;
  
  if (required && !value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  
  return value || '';
}

/**
 * @description Application configuration object with type-safe environment variables
 */
export const Config: EnvironmentConfig = {
  // Supabase Configuration
  SUPABASE_URL: getEnvVar('SUPABASE_URL', '', true),
  SUPABASE_ANON_KEY: getEnvVar('SUPABASE_ANON_KEY', '', true),
  SUPABASE_SERVICE_ROLE_KEY: getEnvVar('SUPABASE_SERVICE_ROLE_KEY'),
  
  // AI Service Configuration
  OPENAI_API_KEY: getEnvVar('OPENAI_API_KEY'),
  GOOGLE_CLOUD_VISION_API_KEY: getEnvVar('GOOGLE_CLOUD_VISION_API_KEY'),
  
  // Application Configuration
  ENVIRONMENT: (getEnvVar('ENVIRONMENT', 'development') as EnvironmentConfig['ENVIRONMENT']),
  API_BASE_URL: getEnvVar('API_BASE_URL', 'https://api.gamezy.app'),
  
  // Development Configuration
  DEBUG_MODE: getEnvVar('DEBUG_MODE', 'true') === 'true',
  ENABLE_FLIPPER: getEnvVar('ENABLE_FLIPPER', 'true') === 'true',
};

/**
 * @description Feature flags for conditional functionality
 */
export const FeatureFlags = {
  ENABLE_AI_MODERATION: Config.ENVIRONMENT !== 'production',
  ENABLE_CAMERA_FEATURES: true,
  ENABLE_NOTIFICATIONS: true,
  ENABLE_ANALYTICS: Config.ENVIRONMENT === 'production',
  ENABLE_ERROR_REPORTING: Config.ENVIRONMENT !== 'development',
} as const;

/**
 * @description Development utilities
 */
export const DevUtils = {
  isDebug: Config.DEBUG_MODE,
  isDevelopment: Config.ENVIRONMENT === 'development',
  isProduction: Config.ENVIRONMENT === 'production',
  log: (message: string, ...args: any[]) => {
    if (Config.DEBUG_MODE) {
      console.log(`[Gamezy] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    if (Config.DEBUG_MODE) {
      console.warn(`[Gamezy] ${message}`, ...args);
    }
  },
} as const;

export default Config; 