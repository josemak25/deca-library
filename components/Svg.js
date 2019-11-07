import React from 'react';
import Svg, { Ellipse } from 'react-native-svg';

export default function SvgContainer(props) {
  const { viewBox, style, color } = props;

  return (
    <Svg viewBox={viewBox} style={style}>
      <Ellipse strokeWidth={1} fill={color} {...props} />
    </Svg>
  );
}
