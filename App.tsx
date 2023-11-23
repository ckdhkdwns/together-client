import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import StartStack from "screens/start/_navigation";



export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    </RecoilRoot>
  );
}
