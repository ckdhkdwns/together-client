import React, { useState } from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 25px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  gap: 30px;
  position: relative;
`;

const Title = styled.Text`
  font-size: 16px;
  margin-top: 1px;
  font-weight: 600;
  padding: 14px 0;
`;

const TInput = styled.TextInput`
  font-size: 16px;
  padding: 14px 0;
  width: 100%;
`;

const ConfirmButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 0px;
  width: 50px;
  height: 50px;
`;

interface FormProps extends TextInputProps {
  inputType: string;
  value: string;
};

export default function Form({ inputType, value, ...props }: FormProps) {
  return (
    <Wrapper>
      <Title>{inputType}</Title>
      <TInput autoCapitalize="none" onChangeText={props.onChangeText} value={value} />
      {/* <ConfirmButton onPress={() => handleConfirm()}>
        <Feather name="check" size={30} color="#ff5858" />
      </ConfirmButton> */}
    </Wrapper>
  );
}
