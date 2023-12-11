import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Posts from "../../share/Posts";
import Search from "./Search";
import HomeHeader from "components/PageHeader/HomeHeader";
import UserProfile from "screens/share/UserProfile";

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <HomeHeader /> }}>
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="OtherProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}
