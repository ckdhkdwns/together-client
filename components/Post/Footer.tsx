import React, { useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";

const Wrapper = styled.View`
  display: flex;
`;
const CommentInput = styled.TextInput``;
const ConfirmButton = styled.TouchableHighlight``;

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
      <CommentInput value={content} onChange={saveContent} />
      <ConfirmButton onPress={() => handleComment(content)} />
    </Wrapper>
  );
}
