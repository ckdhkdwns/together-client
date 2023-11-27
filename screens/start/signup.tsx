import TitleText from "components/TitleText";
import React from "react";
import styled from "styled-components/native";
import axios from 'axios';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SignupBox = styled.View`
  background: #fcfcfc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  padding-top: 34px;
  width: 325px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Inputs = styled.View`
  margin-top: 20px;
`;
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
  height: 46px;
  width: 267px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const SignupButton = styled(Button)`
  margin-top: 29px;
`;
const LoginButton = styled.TouchableOpacity`
  width: 300px;
  flex-direction: row-reverse;
`;


const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin: auto auto;
`;

const LButtonText = styled.Text`
  font-size: 17pt;
  color: #ff5858;
  font-weight: 600;
  text-decoration-line: underline;
`
export default function SignUp({ navigation }) {
  const handleSignup = () => {
    try {
      axios({
        method: 'post',
        url: '/user/12345',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
    } catch {

    }
  }
  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Wrapper>
      <SignupBox>
        <TitleText color="#000000" fontSize={44} />
        <Inputs>
          <Input placeholder="이메일 주소"></Input>
          <Input placeholder="이름"></Input>
          <Input placeholder="닉네임"></Input>
          <Input placeholder="비밀번호"></Input>
          <Input placeholder="비밀번호 확인"></Input>
        </Inputs>

        <SignupButton>
          <ButtonText>회원가입</ButtonText>
        </SignupButton>
      </SignupBox>
      <LoginButton onPress={onPressLogin}>
        <LButtonText>이미 계정이 있으신가요? 로그인</LButtonText>
      </LoginButton>
    </Wrapper>
  );
}
