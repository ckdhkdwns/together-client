import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Post from "components/Post/Post";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: white;
`;
export default function DetailPost({ route }) {
  const [post, setPost] = useState<any>();

  const loadDetailPost = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.get(
        `${process.env.SERVER_IP}/api/posts/${route.params.post.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPost(res.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDetailPost();
  }, []);
  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{
      paddingBottom: 80,
      
    }}
    style={{backgroundColor: "#ffffff"}}>
      <Wrapper>{typeof post != undefined && <Post post={post} />}</Wrapper>
    </KeyboardAwareScrollView>
  );
}
