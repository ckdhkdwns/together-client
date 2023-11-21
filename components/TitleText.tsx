import React from "react";
import { useFonts } from "expo-font";
import { Text, StyleSheet } from "react-native";

type TitleTextProps = {
  color: string;
  fontSize: number;
};

export default function TitleText({ color, fontSize }: TitleTextProps) {
  const [fontsLoaded] = useFonts({
    "Title-Regular": require("assets/fonts/MontserratAlternates-Regular.ttf"),
    "Title-SemiBold": require("assets/fonts/MontserratAlternates-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;
  return <Text style={styles(color, fontSize).title as any}>Together</Text>;
}

const styles = (color, fontSize) =>
  StyleSheet.create({
    title: {
      fontFamily: "Title-SemiBold",
      marginTop: 0,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 0,
      fontSize: fontSize,
      color: color,
    },
  });
