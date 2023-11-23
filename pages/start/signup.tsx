import SignupBox from "components/Signup/SignupBox";
import TitleText from "components/TitleText";
import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
  
`;


const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 50px;
  height: 46px;
  width: 182px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;


const LoginButton = styled(Button)`

  width: 325px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin: auto auto;
`;

export default function SignUp({navigation}) {
  const onPressLogin = () => {
    navigation.navigate("Login");
  }
  return (
    <Wrapper>
      <SignupBox />
      <LoginButton onPress={onPressLogin}>
        <ButtonText>이미 계정이 있으신가요? 로그인</ButtonText>
      </LoginButton>
    </Wrapper>
  );
}
