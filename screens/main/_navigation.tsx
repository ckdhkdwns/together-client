import React, { useEffect } from "react";
import Setting from "screens/main/setting/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStack from "./user/_navigation";
import HomeStack from "./home/_navigation";
import TabIcon from "components/Tab/TabIcon";
import TabBackground from "components/Tab/TabBackground";

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTab() {
  // useEffect(() => {
  //   navigation.setOptions({ gestureEnabled: false })

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 20,
          backgroundColor: "transparent",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarBackground: () => <TabBackground />,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="user" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
