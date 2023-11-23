import React from "react";
import { Feather } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

const SIZE = 37;
const UNFOCUSED_COLOR = "#ffffff";
const GradientIcon = ({ name }) => {
  return (
    <MaskedView maskElement={<Feather name={name} size={SIZE} />}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#650000", "#651f1fb6", "#663d3d78"]}
      >
        <Feather
          name={name}
          style={{
            opacity: 0,
          }}
          size={SIZE}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default function TabIcon({ focused, name }) {
  if (focused) return <GradientIcon name={name} />;
  else return <Feather name={name} size={SIZE} color={UNFOCUSED_COLOR} />;
}
