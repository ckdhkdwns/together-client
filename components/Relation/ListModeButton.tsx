import React from "react";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  height: 30px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #dfdfdf; */
  /* border: 1px solid #efefef; */
`;

const HighlightedButton = styled(Button)`
  /* background: #ff5858; */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
`;
const NormalButton = styled(Button)`
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  /* background-color: #f7f7f7; */
`;

const HighlightedText = styled.Text`
  text-decoration: underline;
  text-decoration-color: #ff5858;
  color: #ff5858;
  font-size: 14px;
  font-weight: 600;
`;
const NormalText = styled.Text`
  text-decoration: underline;
  text-decoration-color: #8f8f8f;
  font-weight: 500;
  color: #8f8f8f;
  font-size: 14px;
`;

export default function ListModeButton({ title, listMode, handleToggle }) {
  if (listMode == title)
    return (
      <HighlightedButton onPress={handleToggle}>
        <HighlightedText>{title}</HighlightedText>
      </HighlightedButton>
    );
  else
    return (
      <NormalButton onPress={handleToggle}>
        <NormalText>{title}</NormalText>
      </NormalButton>
    );
}
