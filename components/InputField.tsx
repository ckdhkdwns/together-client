import { useEffect } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  width: 80%;
  margin: 0 auto;
`;
const Input = styled.TextInput`
  border: 1px solid #bfbfbf;
  height: 45px;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  margin: 9px auto 0px;
`;
const InputHeader = styled.View`
  flex-direction: row;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  padding-left: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  height: 15px;
`;
const InputTitle = styled.Text`
  font-size: 14px;
  color: #2f2f2f;
  font-weight: 600;
`;
const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  /* padding-left: 15px; */
`;

interface InputFieldProps extends TextInputProps {
  inputType: string;
  touched?: boolean;
  error?: string;
}
export default function InputField({
  inputType,
  error,
  ...props
}: InputFieldProps) {
  
  return (
    <Wrapper>
      <InputHeader>
        <InputTitle>{inputType}</InputTitle>
        <ErrorMessage>{error}</ErrorMessage>
      </InputHeader>
      <Input {...props} 
      autoCapitalize="none"
      style={error != ""  &&  {borderWidth: 1, borderColor: "#ff5858"}}/>
    </Wrapper>
  );
}
