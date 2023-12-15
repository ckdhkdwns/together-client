import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TitleText from "components/TitleText";
import axios from "axios";
import InputField from "components/InputField";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "atoms";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #efefef;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-top: 120px;
`;

const BackgroundCircle = styled.View`
  position: absolute;
  width: 1000px;
  height: 1000px;
  border-radius: 1000px;
  top: -500px;
  background-color: #ff5858ef;
`

const Title = styled.View`
 width: 90%;
 padding-left: 10px;
`
const TitleDescription = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin: 5px;
  margin-left: 12px;
`

const LoginBox = styled.View`
  width: 86%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  padding-top: 0px;
  padding-bottom: 35px;
  background: #ffffff;
`;

const Inputs = styled.View`
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 10px;
  height: 45px;
  width: 80%;
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  margin-top: 40px;
`;

const SignupButton = styled.TouchableOpacity`

  margin: 20px auto 0;
  

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
    if (token) {
      try {
        const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.result);
        setUserInfo(res.data.result);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
      if (!res.data.success && res.data.error.code == 1002) {
        setErrorMessages({
          ...copyedErrors,
          ["password"]: res.data.error.message,
        });
        return;
      }

      const token = res.data.result.token;
      initProfile(token);
      AsyncStorage.setItem("token", token);

      navigation.navigate("Main");
      // 로그인 이후 폼 내의 값 지우기
      setTimeout(() => {
        setForm({
          ["email"]: "",
          ["password"]: "",
        });
        setErrorMessages({
          ["email"]: "",
          ["password"]: "",
        });
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

  useEffect(() => {
    navigation.setOptions({ gestureEnabled: false });
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1,  }}
      extraScrollHeight={20}
      scrollEnabled={false}
    >
      <Wrapper>
        <BackgroundCircle />
        <Title>
        <TitleText color="#ffffff" fontSize={54} />

        </Title>
        
        <LoginBox>
          <Inputs>
            <InputField
              inputType="이메일"
              error={errorMessages.email}
              value={form.email}
              placeholder="you@example.com"
              onChangeText={(text) => handleInputChange(text, "email")}
            />
            <InputField
              inputType="비밀번호"
              error={errorMessages.password}
              secureTextEntry
              value={form.password}
              placeholder="비밀번호"
              onChangeText={(text) => handleInputChange(text, "password")}
            />
          </Inputs>
          <LoginButton onPress={handleLogin}>
            <LButtonText>로그인</LButtonText>
          </LoginButton>
          <SignupButton onPress={onPressSignup}>
          <RButtonText>계정이 없으신가요? 회원가입</RButtonText>
        </SignupButton>
        </LoginBox>

      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
