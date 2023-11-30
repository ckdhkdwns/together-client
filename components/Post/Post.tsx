import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import PostHeader from "./Header";
import Toggles from "./Toggles/Toggles";
import Footer from "./Footer";
import { View, Image } from "react-native";
import { Dimensions } from "react-native";
import PostComment from "./Comment";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  width: 100%;
`;

const Sqaure = styled.View``;
const Divider = styled.Text`
  /* border: 0px solid #efefef;
  border-top-width: 1px; */
  font-size: 30px;
  margin: -30px auto 0px;
  letter-spacing: 3.5px;
  font-weight: 600;
  padding-left: 10px;
  color: #afafaf;
`;
const Content = styled.Text`
  margin: 5px 0 15px;
  font-size: 16px;
  padding: 0px 30px;
  font-weight: 500;
`;
const Comments = styled.FlatList`
  margin: 0 30px;
`;

export default function Post({ post }) {
  const handleLike = () => {};
  const handleMark = () => {};
  const handleComment = (content: string) => {};

  // useEffect(() => {
  //   ref.current.measure((x, y, width, height, pageX, pageY) => {
  //     setImageSize(width);
  //   });
  // }, []);
  const squareSize = (Dimensions.get("window").width * 92) / 100;

  return (
    <Wrapper>
      <PostHeader
        image={post.item.profileImage}
        username={post.item.username}
        writedAt={post.item.writedAt}
      />

      <Image
        style={{
          width: squareSize,
          height: squareSize,
          borderRadius: 10,
          marginLeft: (squareSize * 1) / 25,
        }}
        source={{ uri: post.item.thumbnail }}
      />

      <Toggles
        likeCount={post.item.likeCount}
        isLiked={post.item.liked}
        isMarked={post.item.marked}
        handleLike={handleLike}
        handleMark={handleComment}
      />

      <Content>{post.item.content}</Content>
      {/* <Divider style={{width: squareSize}}>.....</Divider> */}
      <Comments
        data={post.item.comments}
        renderItem={(item) => {
          return <PostComment data={item} />;
        }}
      />
      <Footer handleComment={handleComment} />
    </Wrapper>
  );
}
function useComponentSize(): [any, any] {
  throw new Error("Function not implemented.");
}
