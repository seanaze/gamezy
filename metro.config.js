/**
 * @fileoverview Metro bundler configuration for Expo
 * @description Optimized Metro setup for AI-friendly development
 */

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configure resolver for better module resolution
config.resolver = {
  ...config.resolver,
  alias: {
    // Create convenient aliases for AI development
    '@gamezy': './gamezy',
    '@shared': './gamezy/07_shared',
    '@components': './gamezy/07_shared/07-UI-01A_SharedComponents',
    '@types': './gamezy/07_shared/07-TY-02A_DatabaseTypes',
    '@config': './gamezy/07_shared/07-SV-02A_Config',
    '@utils': './gamezy/07_shared/07-UT-01A_ValidationUtils',
  },
  // Support additional file extensions
  sourceExts: [
    ...config.resolver.sourceExts,
    'svg',
    'json',
    'md', // For documentation files
  ],
  // Ignore patterns to reduce bundle size
  blockList: [
    /.*\/__tests__\/.*/,
    /.*\.test\.(js|jsx|ts|tsx)$/,
    /.*\.spec\.(js|jsx|ts|tsx)$/,
    /.*\/_docs\/.*/,
    /.*\/_scaffolddocs\/.*/,
  ],
};

// Configure transformer for better performance
config.transformer = {
  ...config.transformer,
  // Enable inline requires for better performance
  inlineRequires: true,
  // Minify code in production
  minifierConfig: {
    mangle: {
      keep_fnames: true, // Keep function names for debugging
    },
  },
};

// Configure serializer for better debugging
config.serializer = {
  ...config.serializer,
  // Create source maps for better debugging
  createModuleIdFactory: () => (path) => {
    // Use relative paths for easier debugging
    return path.replace(__dirname, '').replace(/\\/g, '/');
  },
};

module.exports = config; 