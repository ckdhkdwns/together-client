import EditProfile from "screens/main/user/EditProfile";
import UserHeader from "components/PageHeader/UserHeader";
import UserProfile from "screens/share/UserProfile";
import WritePost from "screens/write/SelectPhoto";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const User = createNativeStackNavigator<UserStackParamList>();

export default function UserStack() {
  return (
    <User.Navigator
      initialRouteName="Profile"
      screenOptions={{ header: () => <UserHeader /> }}
    >
      <User.Screen
        // options={{ header: () => <UserHeader />   }}
        name="Profile"
        component={UserProfile}
      />
      <User.Screen
        // options={{ header: () => <UserHeader  /> }}
        name="Edit"
        component={EditProfile}
      />
      <User.Screen
        // options={{ header: () => <UserHeader /> }}
        name="Write"
        component={WritePost}
      />
    </User.Navigator>
  );
}
