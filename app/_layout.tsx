import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    DMSans18: require('../assets/fonts/static/DMSans_18pt-Black.ttf'),
    DMSansSemiBold: require('../assets/fonts/static/DMSans_18pt-SemiBold.ttf'),
    SpaceGroteskSemiBold: require('../assets/fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf'),
    SpaceGroteskMedium: require('../assets/fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf'),
    SpaceGroteskLight: require('../assets/fonts/Space_Grotesk/SpaceGrotesk-Light.ttf'),
    SpaceGroteskRegular: require('../assets/fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf'),
    SpaceGroteskBold: require('@/assets/fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf'),




  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name='game-screen' options={{ headerShown: false }}/>
      </Stack>
    </ThemeProvider>
  );
}
