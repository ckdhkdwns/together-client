import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { userPageStateAtom } from "atoms";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Header = styled.View`
  display: flex;
  position: relative;
  padding: 13px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  background: #ffffff;
  flex-direction: row;
  height: 70px;
  align-items: center;
`;

const PrevButton = styled.TouchableOpacity`
  width: 50px;
  height: 70px;
  display: flex;

  justify-content: center;
  align-items: center;
  position: absolute;
  left: 15px;
`;

const WriteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  background: #ff5858;

  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
`;

export default function UserHeader({}) {
  const [userPageState, setUserPageState] = useRecoilState(userPageStateAtom); // profile, edit, writePost, viewPost(user's specific post)
  const [routeName, setRouteName] = useState("profile");
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<UserStackParamList>>();

  const handlePrevButton = () => {
    navigation.navigate("profile");
  };
  const handleWriteButton = () => {
    navigation.navigate("write");
  };

  useEffect(() => {
    setRouteName(route.name);
  }, []);

  return (
    <SafeAreaView style={{paddingBottom: -50, backgroundColor: "#ffffff" }} >
      <Header>
        {routeName != "profile" && (
          <PrevButton onPress={() => handlePrevButton()}>
            <Feather name="chevron-left" size={40} color="#9f9f9f" />
          </PrevButton>
        )}
        <TitleText color="#000000" fontSize={33} />

        {routeName == "profile" && (
          <WriteButton onPress={() => handleWriteButton()}>
            <Feather size={44} color="#ffffff" name="plus" />
          </WriteButton>
        )}
      </Header>
    </SafeAreaView>
  );
}
function StackNavigationProps() {
  throw new Error("Function not implemented.");
}
