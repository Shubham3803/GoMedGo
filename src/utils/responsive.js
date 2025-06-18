import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => width / guidelineBaseWidth * size;
export const verticalScale = size => height / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Screen dimensions
export const screenWidth = width;
export const screenHeight = height;

// Responsive padding and margin
export const wp = percentage => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};

export const hp = percentage => {
  const value = (percentage * height) / 100;
  return Math.round(value);
};

// Font sizes
export const fontSize = {
  xs: scale(12),
  sm: scale(14),
  md: scale(16),
  lg: scale(18),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(30),
};

// Spacing
export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
};

// Border radius
export const borderRadius = {
  sm: scale(4),
  md: scale(8),
  lg: scale(12),
  xl: scale(16),
  round: scale(9999),
}; 