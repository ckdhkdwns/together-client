import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 

import Home from "./home";
import User from "./user";
import Setting from "./setting";

const Tab = createBottomTabNavigator<TabParamList>();
type MainProps = NativeStackScreenProps<StackParamList, "Main">;


export default function Main({ navigation }: MainProps) {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#FF5858"
      },
      tabBarShowLabel: false
    })}>
      <Tab.Screen name="Home" component={Home} 

        options={{
          tabBarIcon: ({ focused, color }) => {
            if(focused) color = "#000000";
            else color = "#ffffff"
          return <Feather name="home" size={34} color={color} />
        }
        }}/>
      <Tab.Screen name="User" component={User} 
      options={{
        tabBarIcon: ({ focused, color }) => {
          if(focused) color = "#000000";
          else color = "#ffffff"
        return <Feather name="user" size={34} color={color} />
      }
      }}/>
      <Tab.Screen name="Setting" component={Setting} 
      options={{
        tabBarIcon: ({ focused, color }) => {
          if(focused) color = "#000000";
          else color = "#ffffff"
        return <Feather name="settings" size={34} color={color} />
      }
      }}/>
    </Tab.Navigator>
  );
}
