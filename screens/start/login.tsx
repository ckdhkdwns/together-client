import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import TitleText from "components/TitleText";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.View`
  background: #fcfcfc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  padding-top: 34px;
  width: 325px;
  padding-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Inputs = styled.View`
  margin-top: 40px;
`
const Input = styled.TextInput`
  background: #efefef;
  border: 1px solid #a0a0a0;
  height: 45px;
  width: 267px;
  border-radius: 10px;
  padding-left: 10px;
  margin: 9px auto 0px;
  border: none;
`;

const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 10px;  
  height: 45px;;
  width: 267px;
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  margin-top: 29px;
`;

const SignupButton = styled.TouchableOpacity`
  width: 300px;
  flex-direction: row-reverse;
`;

const LButtonText = styled.Text`
  color: #ffffff;
  font-size: 17pt;
  margin: auto auto;
  font-weight: 600;
`;

const RButtonText = styled.Text`
  font-size: 17pt;
  color: #ff5858;
  font-weight: 600;
  text-decoration-line: underline;
`

type loginProps = NativeStackScreenProps<StartStackParamList, "Login">;

export default function Login({ navigation }: loginProps) {
  const onPressSignup = () => {
    navigation.navigate("Signup");
  };
  const handleLogin = () => {
    navigation.navigate("Main");
  };
  // useEffect(() => {
  //   navigation.setOptions({ gestureEnabled: false })
  // }, [])
  return (
    <Wrapper>
      <LoginBox>
        <TitleText color="#000000" fontSize={44} />
        <Inputs>
          <Input placeholder="이메일 주소"></Input>
          <Input placeholder="비밀번호"></Input>
        </Inputs>

        <LoginButton onPress={handleLogin}>
          <LButtonText>로그인</LButtonText>
        </LoginButton>
        
      </LoginBox>
      <SignupButton onPress={onPressSignup}>
        <RButtonText>계정이 없으신가요? 회원가입</RButtonText>
      </SignupButton>
    </Wrapper>
  );
}
