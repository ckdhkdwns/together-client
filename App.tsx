import Login from "./pages/start/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./pages/start/signup";
import Intro from "pages/start/intro";
import MainTab from "pages/main/mainTab";
import { RecoilRoot } from "recoil";
import StartStack from "pages/start/startStack";


export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    </RecoilRoot>
  );
}
