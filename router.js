import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Screens from "./screens";
import { customHeaderStyle } from "./constants";
import Search from "./components/Search";

const AppNavigator = createStackNavigator(
  {
    // Home Route
    HomeScreen: {
      screen: Screens.HomeScreen,
      navigationOptions: {
        header: <Search />,
        headerStyle: customHeaderStyle
      }
    },

    // Splash screen route Route
    SplashScreen: {
      screen: Screens.SplashScreen,
      header: null
    }
  },

  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: customHeaderStyle
    }
  }
);

export default AppRoutes = createAppContainer(AppNavigator);
