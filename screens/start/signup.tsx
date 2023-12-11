import TitleText from "components/TitleText";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import axios from "axios";
import InputField from "components/InputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SignupBox = styled.View`
  /* background: #fcfcfc; */
  border-radius: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 19px;
  padding-top: 34px;

  padding-bottom: 30px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
`;

const Inputs = styled.View`
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 10px;
  height: 46px;
  width: 80%;
  margin: 0 auto;
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
  font-size: 16px;
  color: #ff5858;
  font-weight: 600;
  text-decoration-line: underline;
`;

export default function SignUp({ navigation }) {
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    name: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const [form, setForm] = useState({
    email: "",
    name: "",
    nickname: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const validCheck = () => {
    
  }
  const handleSignup = async () => {
    const copyedErrors = JSON.parse(JSON.stringify(errorMessages));
    if(form.email == "") {
      copyedErrors["email"] =  "이메일을 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["email"] =  "";
    }

    if(form.name == "") {
      copyedErrors["name"] =  "이름을 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["name"] =  "";
    }

    if(form.nickname == "") {
      copyedErrors["nickname"] =  "닉네임을 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["nickname"] =  "";
    }

    if(form.password == "") {
      copyedErrors["password"] =  "비밀번호를 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["password"] =  "";
    }

    if(form.password != confirmPassword) {
      copyedErrors["confirmPassword"] =  "비밀번호가 일치하지 않습니다.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["confirmPassword"] =  "";
    }

    try {
      console.log(form);
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/auth/sign-up`,
        form
      );
      console.log(res.data);

      navigation.navigate("Login");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleInputChange = (text, inputType) => {
    setForm({
      ...form,
      [inputType]: text,
    });
  };

  const handleConfirmPassword = (text) => {
    
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1 }}
    extraScrollHeight={20}
  >
    <Wrapper>
      <SignupBox>
        <TitleText color="#000000" fontSize={44} />
        <Inputs>
          <InputField
            inputType="이메일"
            error={errorMessages.email}
            autoFocus
            value={form.email}
            placeholder="you@example.com"
            onChangeText={(text) => handleInputChange(text, "email")}
          />
          <InputField
            inputType="이름"
            error={errorMessages.name}

            value={form.name}
            placeholder="이름"
            onChangeText={(text) => handleInputChange(text, "name")}
          />
          <InputField
            inputType="닉네임"
            error={errorMessages.nickname}

            value={form.nickname}
            placeholder="닉네임"
            onChangeText={(text) => handleInputChange(text, "nickname")}
          />
          <InputField
            inputType="비밀번호"
            error={errorMessages.password}

            value={form.password}
            secureTextEntry
            placeholder="비밀번호"
            onChangeText={(text) => handleInputChange(text, "password")}
          />
          <InputField
            inputType="비밀번호 확인"
            error={errorMessages.confirmPassword}

            secureTextEntry
            value={confirmPassword}
            placeholder="비밀번호 확인"
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </Inputs>

        <SignupButton onPress={handleSignup}>
          <ButtonText>회원가입</ButtonText>
        </SignupButton>
      </SignupBox>
      <LoginButton onPress={onPressLogin}>
        <LButtonText>이미 계정이 있으신가요? 로그인</LButtonText>
      </LoginButton>
    </Wrapper>
    </KeyboardAwareScrollView>
  );
}
