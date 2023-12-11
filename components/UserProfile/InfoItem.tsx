import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  gap: 5px;
  background: #ffffff;
  align-items: center;
  width: 33%;
  `;
  
const Title = styled.Text`
  font-size: 16px;
  color: #7f7f7f;
`;
const Value = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 2px;
`;

type InfoItem = {
  title: string;
  value: number;
};

type InfoItemProps = {
  onPress?: Function | null;
  title: string;
  value: number;
};

export default function InfoItem({ onPress, title, value }: InfoItemProps) {
  return (
    <Wrapper style={title=="팔로워" && {
      borderWidth: 1,
      borderBottomWidth: 0,
      borderTopWidth: 0,
      borderColor: "#efefef"
    }}activeOpacity={1} onPress={() => onPress()}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
}
