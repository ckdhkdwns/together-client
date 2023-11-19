import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

const Wrapper = styled.TouchableOpacity`
  height: 30px;
`;

type MarkButtonProps = {
  isMarked: boolean;
  handleMark: Function;
};
export default function MarkButton({ isMarked, handleMark }: MarkButtonProps) {
  return (
    <Wrapper onPress={() => handleMark()}>
      {isMarked ? (
        <FontAwesome name="star" size={24} color="yellow" />
      ) : (
        <FontAwesome name="star-o" size={24} color="black" />
      )}
    </Wrapper>
  );
}
