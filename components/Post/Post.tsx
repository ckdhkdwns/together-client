import React, { useState } from "react";
import styled from "styled-components/native";
import PostHeader from "./Header";
import Toggles from "./Toggles/Toggles";
import Footer from "./Footer";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-sizing: border-box;
  height: fit-content;
  border: 3px solid #f8f8f8;
`;

const Content = styled.Text``;
const Comments = styled.View`
  display: flex;
  flex-direction: column;
`;
const PostImage = styled.Image``;
export default function Post() {
  const [writer, setWriter] = useState("동그라미");
  const [content, setContent] = useState("너무 귀여워요");
  const [likeCount, setLikeCount] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleLike = () => {};
  const handleMark = () => {};
  const handleComment = (content: string) => {};
  return (
    <Wrapper>
      <PostHeader image={null} username={writer} />
      {/* <PostImage /> */}
      <Toggles
        likeCount={likeCount}
        isLiked={isLiked}
        isMarked={isMarked}
        handleLike={handleLike}
        handleMark={handleComment}
      />
      <Content>{content}</Content>
      <Comments>
        {
          // map Postcomment
        }
      </Comments>
      <Footer handleComment={handleComment} />
    </Wrapper>
  );
}
