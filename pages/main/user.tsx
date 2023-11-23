import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { userInfoAtom, userPageStateAtom } from "atoms";
import EditProfile from "components/EditProfile/EditProfile";
import UserHeader from "components/PageHeader/UserHeader";
import UserProfile from "components/UserProfile/UserProfile";
import WritePost from "components/WritePost/WritePost";
import React, { useState } from "react";
import { Text } from "react-native";
import { useRecoilState } from "recoil";

import styled from "styled-components/native";

const Wrapper = styled.SafeAreaView`
  background: #ffffff;
`;

const UserStack = createNativeStackNavigator<UserStackParamList>();

export default function User() {
  const [userPageState, setUserPageState] = useRecoilState(userPageStateAtom); // profile, edit, writePost, viewPost(user's specific post)

  return (
    <UserStack.Navigator initialRouteName="profile"
    screenOptions={{ header: () => <UserHeader />}}
    >
      <UserStack.Screen
        // options={{ header: () => <UserHeader />   }}
        name="profile"
        component={UserProfile}
      />
      <UserStack.Screen
        // options={{ header: () => <UserHeader  /> }}
        name="edit"
        component={EditProfile}
      />
      <UserStack.Screen
        // options={{ header: () => <UserHeader /> }}
        name="write"
        component={WritePost}
      />
    </UserStack.Navigator>
  );
}
