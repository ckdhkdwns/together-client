import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./Signup";
import MainTab from "screens/main/_navigation";
import SettingHeader from "components/PageHeader/SettingHeader";
import SelectPhoto from "screens/write/SelectPhoto";
import WriteContent from "screens/write/WriteContent";
import ProfileCamera from "screens/camera/ProfileCamera";

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

      {/* 아래는 헤더와 탭 네비게이터를 보이지 않게 하기 위해서 startStack에 넣었습니다. */}

      <Stack.Screen name="WriteContent" component={WriteContent} />
      <Stack.Screen name="SelectPhoto" component={SelectPhoto} />

      <Stack.Screen
        name="ProfileCamera"
        options={{ headerShown: false }}
        component={ProfileCamera}
      />
      {/* stack -> tab */}
    </Stack.Navigator>
  );
}
