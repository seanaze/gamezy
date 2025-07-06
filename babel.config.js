/**
 * @fileoverview Babel configuration for Expo React Native
 * @description Optimized Babel setup with development and production configurations
 */

module.exports = function (api) {
  api.cache(true);
  
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }]
    ],
    plugins: [
      // React Native Reanimated plugin (must be last)
      'react-native-reanimated/plugin',
      
      // NativeWind plugin for Tailwind CSS
      'nativewind/babel',
      
      // Optional chaining and nullish coalescing
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      
      // Class properties
      '@babel/plugin-proposal-class-properties',
      
      // Transform runtime for better performance
      ['@babel/plugin-transform-runtime', {
        helpers: true,
        regenerator: false,
      }],
    ],
    env: {
      production: {
        plugins: [
          // Remove console.log in production
          'transform-remove-console',
          // Inline environment variables
          'transform-inline-environment-variables',
        ],
      },
      development: {
        plugins: [
          // Flipper integration
          '@react-native-community/cli-plugin-metro',
        ],
      },
    },
  };
}; 