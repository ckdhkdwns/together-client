import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Intro from "./intro";
import Login from "./login";
import SignUp from "./signup";
import MainTab from "pages/main/mainTab";

const Stack = createNativeStackNavigator<StackParamList>();

export default function StartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Main" component={MainTab} />
      {/* stack -> tab */}
    </Stack.Navigator>
  );
}
