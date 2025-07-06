/**
 * @fileoverview Jest configuration for React Native/Expo testing
 * @description Configures Jest to work with Expo, React Native, and TypeScript
 */

module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect'
  ],
  collectCoverageFrom: [
    'gamezy/**/*.{ts,tsx}',
    '!gamezy/**/*.d.ts',
    '!gamezy/**/*.test.{ts,tsx}',
    '!gamezy/**/*.spec.{ts,tsx}',
    '!gamezy/**/__tests__/**',
    '!gamezy/**/_*blackbox.md'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'jsdom'
};
