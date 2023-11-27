import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Post from "components/Post/Post";
import { dummyPosts } from "utils/dummyPosts";
import { FlatList, View, Text } from "react-native";

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  background: #ffffff;
`;
const PostList = styled.FlatList`
  background-color: #e2e2e2;
  width: 100%;
`;

export default function Posts() {
  const [posts, setPosts] = useState(dummyPosts);
  const [isFolded, setIsFolded] = useState(false);

  return (
    <Wrapper>
      <PostList
        data={posts}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 90,
          flexGrow: 0,
          gap: 1,
          display: "flex",
          margin: "auto",
          alignItems: "center",
        }}
        renderItem={(item) => {
          return <Post post={item} />;
        }}
      >
        {/* {map contents} */}
      </PostList>
    </Wrapper>
  );
}
