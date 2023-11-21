import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  align-items: center;
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
export default function InfoItem({ title, value }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
}
