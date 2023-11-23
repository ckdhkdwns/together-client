import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import TitleText from "components/TitleText";


export default function Intro({ navigation }) {
  useEffect(() => { // 로그인 페이지로 이동
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000)
  })
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
