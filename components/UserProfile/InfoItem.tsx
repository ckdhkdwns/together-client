import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 90px;
  background: #ffffff;
`;
const Title = styled.Text`
  font-size: 18px;
`;
const Value = styled.Text`
  font-size: 18px;
  font-weight: 600;
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
    <Wrapper activeOpacity={1} onPress={() => onPress()}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
}
