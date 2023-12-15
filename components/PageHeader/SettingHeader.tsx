import React from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = styled.View`
  display: flex;
  position: relative;
  padding: 13px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  padding-bottom: 16.2px;
`;


export default function SettingHeader() {
  return (
    <SafeAreaView style={{ paddingBottom: -50, backgroundColor: "#ffffff" }}>
      <Header>
        <TitleText color="#000000" fontSize={33} />
      </Header>
    </SafeAreaView>
  );
}
