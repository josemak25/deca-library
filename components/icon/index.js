import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default IconContainer = ({ name, size, styles }) => {
  return <Icon name={name} size={size} style={styles} />;
};
