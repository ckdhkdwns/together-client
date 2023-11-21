import Login from "./pages/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./pages/signup";
import Intro from "pages/intro";
import TabNavigator from "components/TabNavigator";
import { RecoilRoot } from "recoil";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Main" component={TabNavigator} />
          {/* stack -> tab */}
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
