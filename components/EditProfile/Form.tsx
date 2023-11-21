import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 14px 19px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  gap: 30px;
  position: relative;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-top: 1px;
`;

const TInput = styled.TextInput`
  font-size: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 0px;
  width: 50px;
  height: 50px;
`;

type FormProps = {
  _type: string;
  value: string;
};

export default function Form({ _type, value }: FormProps) {
  return (
    <Wrapper>
      <Title>{_type}</Title>
      <TInput value={value} />
      <ConfirmButton>
        <Feather name="check" size={34} color="#ff5858" />
      </ConfirmButton>
    </Wrapper>
  );
}
