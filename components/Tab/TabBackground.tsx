import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function TabBackground() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 50,
      }}
      colors={["#FF5858", "#FC7777", "#FB9696"]}
    />
  );
}
