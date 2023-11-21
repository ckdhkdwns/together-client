import React, { useState } from "react";
import styled from "styled-components/native";

import { StyleSheet, Text } from "react-native";
import TitleText from "components/TitleText";
import Post from "components/Post/Post";
import HomeHeader from "components/PageHeader/Home";
import Search from "components/Search/Search";

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

export default function Home() {
  const [posts, setPosts] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchButton = () => {
    setIsSearching(!isSearching);
  };
  return (
    <Wrapper>
      <HomeHeader isSearching={isSearching} handleSearchButton={handleSearchButton} />
      {isSearching ? (
        <Search />
      ) : (
        <Contents>
          <Post />
          {/* map post */}
        </Contents>
      )}
    </Wrapper>
  );
}
