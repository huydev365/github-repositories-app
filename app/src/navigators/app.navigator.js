import { StackNavigator } from "react-navigation";
import SplashScreen from "../screens/splash/splash.screen";
import RepositoriesScreen from "../screens/repositories/repositories.screen";
import DetailScreen from "../screens/detail/detail.screen";

const stackNavigatorOptions = {
  headerMode: "none",
  cardStyle: {
    backgroundColor: "white"
  }
};

export const AppNavigator = StackNavigator(
  {
    Splash: { screen: SplashScreen },
    Repositories: { screen: RepositoriesScreen },
    Detail: { screen: DetailScreen }
  },
  stackNavigatorOptions
);
