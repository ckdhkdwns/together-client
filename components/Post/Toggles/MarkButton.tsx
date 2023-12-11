import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

const Wrapper = styled.TouchableOpacity`
  height: 30px;
  margin-top: 3px;
  width: 30px;
  margin-right: 10px;
`;

type MarkButtonProps = {
  isMarked: boolean;
  handleMark: Function;
};
export default function MarkButton({ isMarked, handleMark }: MarkButtonProps) {
  return ( 
    <Wrapper onPress={() => handleMark()}>
      {isMarked ? (
        <FontAwesome name="star" size={26} color="#FFD600" />
      ) : (
        <FontAwesome name="star-o" size={26} color="black" />
      )}
    </Wrapper>
  );
}
