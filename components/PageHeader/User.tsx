import React from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { userPageStateAtom } from "atoms";

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

const WriteButton = styled.TouchableOpacity`
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

export default function UserHeader() {
  const [userPageState, setUserPageState] = useRecoilState(userPageStateAtom); // profile, edit, writePost, viewPost(user's specific post)

  const handlePrevButton = () => {
    setUserPageState("profile");
  };
  const handleWriteButton = () => {
    setUserPageState("write");
  }
  return (
    <Header>
      {userPageState != "profile" && (
        <PrevButton onPress={() => handlePrevButton()}>
          <Feather name="chevron-left" size={40} color="#9f9f9f" />
        </PrevButton>
      )}
      <TitleText color="#000000" fontSize={33} />
      {userPageState == "profile" && (
        <WriteButton onPress={() => handleWriteButton()}>
          <Feather size={44} color="#ffffff" name="plus" />
        </WriteButton>
      )}
    </Header>
  );
}
