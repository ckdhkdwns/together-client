import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginBox from "components/Login/LoginBox";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
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

type loginProps = NativeStackScreenProps<StackParamList, "Login">;

export default function Login({ navigation }: loginProps) {
  const onPressSignup = () => {
    navigation.navigate("Signup");
  };
  // useEffect(() => {
  //   navigation.setOptions({ gestureEnabled: false })
  // }, [])
  return (
    <Wrapper>
      <LoginBox navigation={navigation} />
      <SignupButton onPress={onPressSignup}>
        <ButtonText>계정이 없으신가요? 회원가입</ButtonText>
      </SignupButton>
    </Wrapper>
  );
}
