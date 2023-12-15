import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

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
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 15px;
`;
const SearchButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  display: flex;
  /* background: #ff5858; */
  position: absolute;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  right: 15px;
`;

export default function HomeHeader() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const [routeName, setRouteName] = useState("Posts");
  const route = useRoute();

  const handlePrevButton = () => {
    navigation.navigate("Posts");
  };
  const handleSearchButton = () => {
    navigation.navigate("Search");
  };

  useEffect(() => {
    setRouteName(route.name);
  }, []);

  return (
    <SafeAreaView style={{ paddingBottom: -50, backgroundColor: "#ffffff" }}>
      <Header>


        <TitleText color="#000000" fontSize={33} />

        {routeName == "Posts" && (
          <SearchButton onPress={() => handleSearchButton()}>
            <Feather size={25} color="#000000" name="search" />
          </SearchButton>
        )}
      </Header>
    </SafeAreaView>
  );
}
