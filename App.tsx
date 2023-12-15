import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import StartStack from "screens/start/_navigation";
import { LogBox } from "react-native"



export default function App() {
  LogBox.ignoreAllLogs(true)

  return (
    <RecoilRoot>
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    </RecoilRoot>
  );
}
