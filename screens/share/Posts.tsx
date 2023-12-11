import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Post from "components/Post/Post";
import { dummyPosts } from "utils/dummyPosts";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  CommonActions,
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "atoms";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  background: #ffffff;
`;
const PostList = styled.FlatList`
  background-color: #ffffff;
  width: 100%;
`;

export default function Posts({ route }) {
  const [posts, setPosts] = useState();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const isFocused = useIsFocused();

  const loadPosts = async () => {
    const token = await AsyncStorage.getItem("token");
    try {

      if(route.params && route.params.isFavoriteList) {
        const res = await axios.get(`${process.env.SERVER_IP}/api/user/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(res.data.result);

      } else {
        const res = await axios.get(
          `${process.env.SERVER_IP}/api/posts/following`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(res.data.result.posts);
      }
      
      
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (isFocused) {
      console.log("포스트를 받아옵니다.");
      loadPosts();
    }
  }, [isFocused]);

  // useEffect(() => {
  //   console.log(posts[2].comments)
  // }, [posts]);
  return (
    <KeyboardAwareScrollView
    extraScrollHeight={48}
    >
      <Wrapper>
        <PostList
          data={posts}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
            flexGrow: 0,
            gap: 1,
            display: "flex",
            margin: "auto",
            alignItems: "center",
          }}
          renderItem={({item}) => {
            return <Post post={item} />;
          }}
        >
          {/* {map contents} */}
        </PostList>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
