import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./Signup";
import MainTab from "screens/main/_navigation";
import SettingHeader from "components/PageHeader/SettingHeader";
import SelectPhoto from "screens/write/SelectPhoto";
import WriteContent from "screens/write/WriteContent";

const Stack = createNativeStackNavigator<StartStackParamList>();

export default function StartStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <SettingHeader /> }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Intro"
        component={Intro}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainTab}
      />

      <Stack.Screen name="WriteContent" component={WriteContent} />
      <Stack.Screen name="SelectPhoto" component={SelectPhoto} />
      {/* stack -> tab */}
    </Stack.Navigator>
  );
}
