import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import TitleText from "components/TitleText";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
`;

const LoginBox = styled.View`
  background: #f8f8f8;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  margin: 206px auto 41px;
  padding-top: 44px;
  width: 325px;
  height: 336px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Input = styled.TextInput`
  background: #ffffff;
  border: 1px solid #a0a0a0;
  height: 44px;
  width: 267px;
  margin: 22px auto 0px;
`;

const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 50px;
  height: 46px;
  width: 182px;
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  margin-top: 29px;
`;

const SignupButton = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 50px;
  height: 46px;
  width: 282px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin: auto auto;
`;

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
        <Input placeholder="이메일 주소"></Input>
        <Input placeholder="비밀번호"></Input>
        <LoginButton onPress={handleLogin}>
          <ButtonText>로그인</ButtonText>
        </LoginButton>
      </LoginBox>
      <SignupButton onPress={onPressSignup}>
        <ButtonText>계정이 없으신가요? 회원가입</ButtonText>
      </SignupButton>
    </Wrapper>
  );
}
