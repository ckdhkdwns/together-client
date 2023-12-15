import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const Wrapper = styled.View`
  background: #ff5858;
  display: flex;
  flex-direction: row;
  padding: 12px;
  gap: 12px;
  margin: 0 auto;
  border-radius: 15px;
`;

const Button = styled.TouchableOpacity`
    width: 90px;
    height: 90px;
    background: #ffffff;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`;

type ChangeImageModalProps = {
    handleCamera: Function,
    handleImageButton: Function,
    handleDeleteButton: Function,
    setIsModalOpen: Function
}
export default function ChangeImageModal({ handleCamera, handleImageButton, handleDeleteButton, setIsModalOpen }: ChangeImageModalProps) {
    const IconSize = 44;
  return (
    <Wrapper>
      <Button onPress={() => handleCamera()}>
        <FontAwesome name="camera" size={IconSize} color="black" />
      </Button>
      <Button onPress={()=> handleImageButton()}>
        <FontAwesome name="image" size={IconSize} color="black" />
      </Button>
      <Button onPress={() => handleDeleteButton()}>
        <FontAwesome name="trash" size={IconSize} color="black" />
      </Button>
    </Wrapper>
  );
}
