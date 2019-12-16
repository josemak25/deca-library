import React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default BookmarkIcon = props => (
  <Svg width={63} height={63} {...props}>
    <Defs></Defs>
    <G filter="url(#prefix__a)">
      <Circle
        cx={23}
        cy={23}
        r={23}
        transform="translate(9 6)"
        fill="#65ddb9"
      />
    </G>
    <Path
      d="M37.526 22.457a1.031 1.031 0 00-.48-.375 1.012 1.012 0 00-.407-.082h-9.578a1.012 1.012 0 00-.4.082 1.03 1.03 0 00-.48.375.97.97 0 00-.178.567V34.81a.971.971 0 00.178.567 1.03 1.03 0 00.48.375 1.011 1.011 0 00.4.082 1.09 1.09 0 00.759-.3l4.032-3.877 4.032 3.877a1.088 1.088 0 00.759.292 1.064 1.064 0 00.882-.448.97.97 0 00.178-.567V23.024a.971.971 0 00-.177-.567z"
      fill="#fff"
    />
  </Svg>
);
