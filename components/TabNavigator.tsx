import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";

import MaskedView from "@react-native-masked-view/masked-view";

import Home from "pages/main/home";
import User from "pages/main/user";
import Setting from "pages/main/setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigator({ navigation }) {
  // useEffect(() => {
  //   navigation.setOptions({ gestureEnabled: false })

  const UnFocusedColor = "#ffffff";
  const Size = 37
  const gradientIcon = (name) => {
    return (
      <MaskedView maskElement={<Feather name={name} size={Size} />}>
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
            size={Size}
          />
        </LinearGradient>
      </MaskedView>
    );
  };
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 20
        },
        tabBarBackground: () => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 100 ,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: 50
            }}
            colors={["#FF5858", "#fc5a5ad4", "#f95d5db1"]}
          />
        ),
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused  }) => {
            if (focused) return gradientIcon("home");
            else return <Feather name="home" size={Size} color={UnFocusedColor} />;
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused  }) => {
            if (focused) return gradientIcon("user");
            else return <Feather name="user" size={Size} color={UnFocusedColor} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) return gradientIcon("settings");
            else return <Feather name="settings" size={Size} color={UnFocusedColor} />;
            
          },
        }}
      />
    </Tab.Navigator>
  );
}
