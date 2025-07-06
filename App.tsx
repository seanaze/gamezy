/**
 * @fileoverview Main application component for Gamezy
 * @description Entry point with proper navigation and provider setup
 */

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

// Import navigation and providers
import { DevUtils, FeatureFlags } from './gamezy/07_shared/07-SV-02A_Config'
import { AuthNavigator } from './gamezy/07_shared/07-NV-02A_AuthNavigator'

// Configure React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: FeatureFlags.ENABLE_ERROR_REPORTING ? 3 : 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

/**
 * @description Main App component with all necessary providers
 */
export default function App() {
  // Log app initialization in debug mode
  if (DevUtils.isDebug) {
    DevUtils.log('App initialized', {
      environment: DevUtils.isDevelopment ? 'development' : 'production',
      features: Object.entries(FeatureFlags)
        .filter(([, enabled]) => enabled)
        .map(([key]) => key),
    })
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AuthNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) 