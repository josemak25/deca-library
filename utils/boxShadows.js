import { StyleSheet } from 'react-native';

function createBoxShadowStyle(elevation, color) {
  return {
    elevation,
    shadowColor: color,
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: Math.floor((0.8 * elevation) / 2)
  };
}

export default function boxShadow({ elevation, color }) {
  const { shadow } = StyleSheet.create({
    shadow: createBoxShadowStyle(elevation, color)
  });
  return shadow;
}
