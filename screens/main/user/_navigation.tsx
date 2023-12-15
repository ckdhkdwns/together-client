import EditProfile from "screens/main/user/EditProfile";
import UserHeader from "components/PageHeader/UserHeader";
import UserProfile from "screens/share/UserProfile";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RelationList from "screens/main/user/RelationList";
import Posts from "screens/share/Posts";
import ProfileCamera from "screens/camera/ProfileCamera";
import DetailPost from "./DetailPost";

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
        initialParams={{ nickname: null }}
        component={UserProfile}
      />
      <User.Screen
        // options={{ header: () => <UserHeader  /> }}
        name="Edit"
        component={EditProfile}
      />
      <User.Screen
        // options={{ header: () => <UserHeader  /> }}
        name="Relations"
        component={RelationList}
      />
      <User.Screen
        // options={{ header: () => <UserHeader  /> }}
        name="FavoriteList"
        component={Posts}
      />
      <User.Screen name="DetailPost" component={DetailPost} />
    </User.Navigator>
  );
}
