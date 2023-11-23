import React, { useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0px solid #f8f8f8;
  border-top-width: 2px;
`;
const CommentInput = styled.TextInput`
  height: 30px
`;
const ConfirmButton = styled.TouchableOpacity`
  width: 48px;
  height: 27px;
  border-radius: 15px;
  background: #ff5858;
  justify-content: center;
  align-items: center;
`;

const WriteText = styled.Text`
  font-size: 15px;
  color: #ffffff;
`
type FooterProps = {
  handleComment: Function;
};
export default function Footer({ handleComment }: FooterProps) {
  const [content, setContent] = useState("");

  const saveContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <Wrapper>
      <CommentInput placeholder="댓글을 입력하세요" value={content} onChange={saveContent} />
      <ConfirmButton onPress={() => handleComment(content)}>
      <WriteText>입력
      </WriteText>
      </ConfirmButton>
    </Wrapper>
  );
}
