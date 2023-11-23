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

export default function SettingHeader() {
  return (
    <Header>
      <TitleText color="#000000" fontSize={33} />
    </Header>
  );
}
