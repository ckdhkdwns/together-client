import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { GestureResponderEvent } from "react-native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 30px;
  gap: 8px;
  margin-left: 10px;
  align-items: center;
`;

const LikeCount = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
type HeartButtonProps = {
  isLiked: boolean;
  likeCount: number;
  handleLike: Function;
};
export default function HeartButton({
  isLiked,
  likeCount,
  handleLike,
}: HeartButtonProps) {
  return (
    <Wrapper onPress={() => handleLike()}>
      {isLiked ? (
        <MaterialCommunityIcons name="heart" size={24} color="red" />
      ) : (
        <MaterialCommunityIcons name="cards-heart-outline" size={24} color="black" />
      )}
      <LikeCount style={{ color: isLiked ? "#ff5858" : "#000000" }}>
        {likeCount}
      </LikeCount>
    </Wrapper>
  );
}
