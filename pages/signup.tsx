import TitleText from "components/TitleText";
import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const LoginBox = styled.View`
  background: #f8f8f8;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  margin: 206px auto 41px;
  width: 325px;
  height: 336px;
`;

const AppTitle = styled.Text`
  margin: 44px auto 0px;
  font-size: 43px;
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

const RegisterButton = styled(Button)`
  width: 325px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin: auto auto;
`;

export default function SignUp() {
  return (
    <Wrapper>
      <LoginBox>
        <TitleText color="#000000" fontSize="44"/>
        <Input placeholder="이메일 주소"></Input>
        <Input placeholder="이름"></Input>
        <Input placeholder="닉네임"></Input>
        <Input placeholder="비밀번호"></Input>
        <Input placeholder="비밀번호 확인"></Input>
        <LoginButton>
          <ButtonText>회원가입</ButtonText>
        </LoginButton>
      </LoginBox>
      <RegisterButton>
        <ButtonText>이미 계정이 있으신가요? 로그인</ButtonText>
      </RegisterButton>
    </Wrapper>
  );
}
