import React, { useState } from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import TitleText from "components/TitleText";
import Post from "components/Post/Post";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
`;

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
const Contents = styled.View`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
    const [posts, setPosts] = useState({});
  return (
    <Wrapper>
      <Header>
        <TitleText  color="#000000" fontSize="33"/>
        <SearchButton>
          <Feather size={32} color="#ffffff" name="search" />
        </SearchButton>
      </Header>
      <Contents>
        <Post />
        {/* map post */}
      </Contents>
    </Wrapper>
  );
}
