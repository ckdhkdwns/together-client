import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import FormData from "form-data";
import * as MediaLibrary from 'expo-media-library';



const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
  justify-content: space-between;
`;
const Main = styled.View`
  display: flex;
`;

const PrevButton = styled.TouchableOpacity`
  justify-content: center;
  padding-left: 8px;
  height: 50px;
`;
const ChosenImage = styled.Image``;

const ContentInput = styled.TextInput`
  padding: 26px;
  font-size: 16px;
  width: 100%;
`;

const UploadButton = styled.TouchableOpacity`
  background: #ff5858;
  justify-content: center;
  margin: 9px;
  align-items: center;
  height: 44px;
  border-radius: 50px;
`;

const WText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export default function WriteContent({ route }) {
  const [content, setContent] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const mainNavigation = useNavigation<StackNavigationProp<TabParamList>>();
  const startNavigation =
    useNavigation<StackNavigationProp<StartStackParamList>>();

  const onChangeContent = (text) => {
    setContent(text);
  };

  const handlePrevButton = () => {
    startNavigation.navigate("SelectPhoto");
  };

  const handleUpload = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    try {
      // ph to file
      let slicedUri = route.params.imageUri.slice(5);
      let returnedAssetInfo = await MediaLibrary.getAssetInfoAsync(slicedUri)
      
      const formData = new FormData();
      formData.append("file", {
        name: "image",
        uri: returnedAssetInfo.localUri,
        type: "image/png",
      });

      const resImage = await axios.post(
        `${process.env.SERVER_IP}/api/posts/image`,
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const serverImageUrl = resImage.data.result.imgUrl;
      const data = {
        content: content,
        imgUrl: serverImageUrl,
      };
      const resContent = await axios.post(
        `${process.env.SERVER_IP}/api/posts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(resContent.data);
      // console.log(resImage.data);
    } catch(error) {
      console.error(error);
    }
    try {

    } catch (error) {
      console.error(error);
    }

    mainNavigation.navigate("Home");

  };

  return (
    <Wrapper>
      <Main>
        <PrevButton onPress={handlePrevButton}>
          <Feather name="chevron-left" size={35} color="#9f9f9f" />
        </PrevButton>
        <ChosenImage
          style={{ width: windowWidth, height: windowWidth }}
          source={{ uri: route.params.imageUri }}
        />
        <ContentInput
          multiline={true}
          numberOfLines={10}
          placeholder="문구를 작성하세요"
          value={content}
          onChangeText={onChangeContent}
        />
      </Main>

      <UploadButton onPress={handleUpload}>
        <WText>공유하기</WText>
      </UploadButton>
    </Wrapper>
  );
}
