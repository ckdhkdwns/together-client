import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TitleText from "components/TitleText";
import axios from "axios";
import InputField from "components/InputField";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "atoms";

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
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  padding-top: 34px;
  width: 325px;
  padding-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Inputs = styled.View`
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 10px;
  height: 45px;
  width: 267px;
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  margin-top: 40px;
`;

const SignupButton = styled.TouchableOpacity`
  width: 300px;
  flex-direction: row-reverse;
`;

const LButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin: auto auto;
  font-weight: 600;
`;

const RButtonText = styled.Text`
  font-size: 16px;
  color: #ff5858;
  font-weight: 600;
  text-decoration-line: underline;
`;

type loginProps = NativeStackScreenProps<StartStackParamList, "Login">;

export default function Login({ navigation }: loginProps) {
  const [userInfo, setUserInfo] = useRecoilState<UserProfile>(userInfoAtom);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const initProfile = async (token) => {
    try {
      const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserInfo(res.data.result);
    } catch(error) {
      console.error(error);
    }
  }

  const handleLogin = async () => {
    // 이메일과 비밀번호의 유효성 검증
    const copyedErrors = JSON.parse(JSON.stringify(errorMessages));
    if (form.email == "") {
      copyedErrors["email"] = "이메일을 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["email"] = "";
    }

    if (form.password == "") {
      copyedErrors["password"] = "비밀번호를 입력해주세요.";
      setErrorMessages(copyedErrors);
      return;
    } else {
      copyedErrors["password"] = "";
    }

    try {
      const res = await axios.get(`${process.env.SERVER_IP}/api/auth/sign-in`, {
        params: form,
      });
      // 에러 핸들링
      if (!res.data.success && res.data.error.code == 1001) {
        setErrorMessages({
          ...copyedErrors,
          ["email"]: res.data.error.message,
        });
        return;
      }
      const token = res.data.result.token;
      AsyncStorage.setItem("token", token);
      initProfile(token)
      navigation.navigate("Main");

      setTimeout(() => {
        setForm({
          ["email"]: "",
          ["password"]: "",
        });
        setErrorMessages({
          ['email']: "",
          ['password']: "",
        })
      }, 1000);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const onPressSignup = () => {
    navigation.navigate("Signup");
  };

  const handleInputChange = (text, inputType) => {
    setForm({
      ...form,
      [inputType]: text,
    });
  };

  const autoLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      try {
        // 토큰이 유효하지 안 유효한지
        const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        initProfile(token)
        navigation.navigate("Main");
      } catch (error) {
        console.log("자동 로그인 실패");
      }
    }
  };

  useEffect(() => {
    navigation.setOptions({ gestureEnabled: false });
    autoLogin();
  }, []);

  return (
    <Wrapper>
      <LoginBox>
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
            inputType="비밀번호"
            error={errorMessages.password}
            autoFocus
            secureTextEntry
            value={form.password}
            placeholder="비밀번호"
            onChangeText={(text) => handleInputChange(text, "password")}
          />
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
