import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { Container, TabTitle, tabStyle, activeTabStyle } from "./styles";
import Button from "../button";
import getTabAxisTitle from "../../utils/tabAxis";

export default function Categories() {
  const initialState = {
    active: "all",
    xTabAll: 0,
    xTabFiction: 0,
    xTabPolitical: 0,
    xTabRomance: 0,
    activeSlideValue: new Animated.Value(0),
    routes: ["all", "fiction", "political", "romance"]
  };

  const [tabLinks, setTabLinks] = useState(initialState);

  const handleLayout = ({ nativeEvent }, title) => {
    const tabAxisName = getTabAxisTitle(title);

    setTabLinks({ ...tabLinks, [tabAxisName]: nativeEvent.layout.x });
  };

  const handleSlide = tab => {
    const activeSlide = getTabAxisTitle(tab);
    Animated.spring(tabLinks.activeSlideValue, {
      toValue: tabLinks[activeSlide],
      duration: 100
    }).start();
  };

  const handlePress = tab => {
    setTabLinks({ ...tabLinks, active: tab });
    handleSlide(tab);
  };

  return (
    <Container>
      {tabLinks.routes.map(title => (
        <Button
          key={title}
          style={tabStyle}
          onLayout={event => handleLayout(event, title)}
          onPress={() => handlePress(title)}
        >
          <TabTitle>{title}</TabTitle>
        </Button>
      ))}
      <Animated.View
        style={{
          ...activeTabStyle,
          transform: [
            {
              translateX: tabLinks.activeSlideValue
            }
          ]
        }}
      />
    </Container>
  );
}
