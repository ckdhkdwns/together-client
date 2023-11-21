import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  height: 30px;
  align-items: center;
`;

const LikeCount = styled.Text`
  font-size: 15px;
`
type HeartButtonProps = {
  isLiked: boolean;
  likeCount: number;
  handleLike: Function;
};
export default function HeartButton({ isLiked, likeCount, handleLike }: HeartButtonProps) {
  return (
    <Wrapper onPress={() => handleLike()}>
      {isLiked ? (
        <FontAwesome name="heart" size={24} color="red" />
      ) : (
        <FontAwesome name="heart-o" size={24} color="black" />
      )}
      <LikeCount>{likeCount}</LikeCount>
    </Wrapper>
  );
} 