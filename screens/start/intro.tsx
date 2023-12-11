import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import TitleText from "components/TitleText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { useRecoilState } from "recoil";
import { userInfoAtom } from "atoms";


export default function Intro({ navigation }) {
  const [userInfo, setUserInfo] = useRecoilState<UserProfile>(userInfoAtom);

  const autoLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(res.data.result);
        navigation.navigate("Main");
      } catch (error) {
        console.log("자동 로그인 실패");
        navigation.navigate("Login");
      }
    } else {
      console.log("자동 로그인 실패");
      navigation.navigate("Login");
    }
  };

  
  useEffect(() => { 
    setTimeout(() => {
      autoLogin();
    }, 2000);
  }, []);


  return (
    <LinearGradient
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      style={styles.container}
      colors={["#FF5858", "#fc5a5ad4", "#f95d5db1"]}
    >
      <TitleText color="#ffffff" fontSize={60} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
