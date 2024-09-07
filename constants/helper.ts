import { Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export const { width: screenWidthScreen, height: screenHeightScreen } = Dimensions.get('screen');

export const RPW = (percentage: number) => (percentage / 100) * screenWidth;
export const RPH = (percentage: number) => (percentage / 100) * screenHeight;

export const isLandscape = screenWidth > screenHeight;
export const isPortrait = !isLandscape;

const base = isLandscape ? screenHeight : screenWidth;
const magicNumber = 375;

export const vw = (size: number = 0) => Math.floor((screenWidth / 100) * size);
export const vh = (size: number = 0) => Math.floor((screenHeight / 100) * size);

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const rem = (size: number = 0) => {
  if (!isIOS && !isAndroid) {
    return size; // for storybook
  }
  return Math.floor((base / magicNumber) * size);
};

export const getRandomString = () => Math.random().toString(36).substring(3, 9);
