import React, { useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  position: relative;
  width: 100%;
  margin: auto;
  padding-bottom: 18px;
  padding: 10px 20px 15px;

`;
const CommentInput = styled.TextInput`
  height: 40px;
  background: #f3f3f3;
  font-size: 16px;
  padding-left: 15px;
  width: 100%;
  border-radius: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  width: 52px;
  height: 30px;
  border-radius: 18px;
  background: #ff5858;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 26px;
  top: 15px;
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
      <AntDesign name="arrowup" size={24} color="#ffffff" />
      </ConfirmButton>
    </Wrapper>
  );
}
