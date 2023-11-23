import React, { useState } from "react";
import styled from "styled-components/native";

import { StyleSheet, Text } from "react-native";
import TitleText from "components/TitleText";
import Post from "components/Posts/Post/Post";
import HomeHeader from "components/PageHeader/HomeHeader";
import Search from "components/Search/Search";
import { createStackNavigator } from "@react-navigation/stack";
import Posts from "components/Posts/Posts";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
`;

const Contents = styled.View`
  display: flex;
  flex-direction: column;
`;

const HomeStack = createStackNavigator();


export default function Home() {
  const [posts, setPosts] = useState({});
  return (
    <Wrapper>
      <HomeStack.Navigator
      screenOptions={{header: () => (<HomeHeader />)}}>
        <HomeStack.Screen name="posts" component={Posts} />
        <HomeStack.Screen name="search" component={Search} />
      </HomeStack.Navigator>
    </Wrapper>
  );
}
