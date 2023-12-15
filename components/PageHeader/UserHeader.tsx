import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import TitleText from "../TitleText";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { editProfileDataAtom, userInfoAtom } from "atoms";
import { useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import FormData from "form-data";

const Header = styled.View`
  display: flex;
  position: relative;
  padding: 13px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  background: #ffffff;
  flex-direction: row;
  height: 70px;
  align-items: center;
`;

const ConfirmButton = styled.TouchableOpacity`
  width: 50px;
  height: 70px;
  display: flex;

  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
`;

const WriteButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  display: flex;
  /* background: #ff5858; */

  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
`;

const ConfirmText = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;
export default function UserHeader({}) {
  const route = useRoute();
  const tabNavigation =
    useNavigation<StackNavigationProp<UserStackParamList>>();
  const stackNavigation =
    useNavigation<StackNavigationProp<StartStackParamList>>();
  const userStackNavigation =
    useNavigation<StackNavigationProp<UserStackParamList>>();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [editProfileData, setEditProfileData] =
    useRecoilState(editProfileDataAtom);

  const handleConfirmButton = async () => {
    const token = await AsyncStorage.getItem("token");
    let copiedInfo: UserProfile = JSON.parse(JSON.stringify(userInfo));

    try {
      const res = await axios.patch(
        `${process.env.SERVER_IP}/api/user/info`,
        {
          nickname: editProfileData.nickname,
          introduce: editProfileData.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        copiedInfo = {
          ...userInfo,
          ["nickname"]: editProfileData.nickname,
          ["introduce"]: editProfileData.description,
        };
      }
    } catch (error) {
      console.log(error);
    }

    try {
      let res;
      if (editProfileData.isImageDeleted) {
        res = await axios.delete(
          `${process.env.SERVER_IP}/api/user/info/profile-image`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        const formData = new FormData();
        formData.append("file", {
          name: "imageName",
          uri: editProfileData.profileImageUrl,
          type: "image/png",
        });
        res = await axios.post(
          `${process.env.SERVER_IP}/api/user/info/profile-image`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      console.log("로그", res.data);
      setUserInfo({
        ...copiedInfo,
        ["profileImgUrl"]: res.data.result.profileImgUrl,
      });
      userStackNavigation.navigate("Profile");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleWriteButton = () => {
    stackNavigation.navigate("SelectPhoto");
  };

  return (
    <SafeAreaView style={{ paddingBottom: -50, backgroundColor: "#ffffff" }}>
      <Header>
        {route.name == "Edit" && (
          <ConfirmButton onPress={() => handleConfirmButton()}>
            <ConfirmText>적용</ConfirmText>
          </ConfirmButton>
        )}
        <TitleText color="#000000" fontSize={33} />

        {route.name == "Profile" && (
          <WriteButton onPress={() => handleWriteButton()}>
            <AntDesign name="plus" size={26} color="black" />
          </WriteButton>
        )}
      </Header>
    </SafeAreaView>
  );
}
