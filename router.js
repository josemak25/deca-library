import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Screens from "./screens";

const AppNavigator = createStackNavigator(
  {
    // Home Route
    HomeScreen: { screen: Screens.HomeScreen },

    // Splash screen route Route
    SplashScreen: {
      screen: Screens.SplashScreen,
      header: null
    }
  },

  {
    initialRouteName: "SplashScreen",
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: "#ffffff"
    }
  }
);

export default AppRoutes = createAppContainer(AppNavigator);
