import React from "react";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import boxShadow from "../../utils/boxShadows";

export default renderButton = (type, theme) => {
  return () => {
    return (
      <Button
        style={[
          {
            width: 56,
            height: 56,
            marginTop: 45,
            marginRight: 40,
            borderRadius: 56 / 2,
            backgroundColor: theme.PRIMARY_COLOR
          },
          boxShadow({ elevation: 9, color: theme.SHADOW_COLOR })
        ]}
      >
        <Icon
          name={type}
          style={{
            color: "#fff",
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
