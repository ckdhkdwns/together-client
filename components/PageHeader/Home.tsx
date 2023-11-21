import React from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";

const Header = styled.View`
  display: flex;
  position: relative;
  padding: 13px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
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
  width: 50px;
  height: 50px;
  display: flex;
  background: #ff5858;
  position: absolute;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  right: 15px;
`;

type HomeHeaderProps = {
  isSearching: boolean;
  handleSearchButton: Function;
};
export default function HomeHeader({
  isSearching,
  handleSearchButton,
}: HomeHeaderProps) {
  return (
    <Header>
      {isSearching && (
        <PrevButton onPress={() => handleSearchButton()}>
          <Feather name="chevron-left" size={40} color="#9f9f9f" />
        </PrevButton>
      )}

      <TitleText color="#000000" fontSize={33} />

      {!isSearching && (
        <SearchButton onPress={() => handleSearchButton()}>
          <Feather size={32} color="#ffffff" name="search" />
        </SearchButton>
      )}
    </Header>
  );
}
