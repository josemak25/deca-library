import React from "react";
import { Dimensions } from "react-native";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import boxShadow from "../../utils/boxShadows";

import { DoneButtonText } from "./styles";
import { fonts } from "../../constants";

export const NextButton = ({ theme, handleChange }) => {
  return () => {
    return (
      <Button
        style={[
          {
            width: 56,
            height: 56,
            marginTop: 70,
            marginRight: 40,
            borderRadius: 56 / 2,
            backgroundColor: theme.PRIMARY_COLOR
          },
          boxShadow({ elevation: 9, color: theme.SHADOW_COLOR })
        ]}
        onPress={handleChange}
      >
        <Icon
          name="chevron-right"
          style={{
            color: theme.COLOR_WHITE,
            fontFamily: theme.FONT_FAMILY_BOLD,
            fontSize: 40,
            height: 40,
            width: 40
          }}
        />
      </Button>
    );
  };
};

export const DoneButton = ({ theme, navigate }) => {
  const { width } = Dimensions.get("window");

  return () => {
    return (
      <Button
        style={[
          {
            width: 150,
            height: 42,
            marginTop: 70,
            marginRight: width / 4 + 5,
            borderRadius: 50 / 2,
            backgroundColor: theme.PRIMARY_COLOR,
            alignItems: "center",
            justifyContent: "center"
          },
          boxShadow({ elevation: 9, color: theme.SHADOW_COLOR })
        ]}
        onPress={() => navigate("HomeScreen")}
      >
        <DoneButtonText
          color={theme.COLOR_WHITE}
          font={fonts.FONT_FAMILY_REGULAR_BOLD}
        >
          START
        </DoneButtonText>
      </Button>
    );
  };
};
