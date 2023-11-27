import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";
import { Platform, Image } from "react-native";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TabNavigationState, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  withAndroidPermissions,
  withIOSPermissions,
} from "utils/getPermissions";

const Wrapper = styled.View`
  display: flex;
  height: 100%;
`;

const Header = styled.View`
  background: #ffffff;
  height: 50px;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.TouchableOpacity`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NextText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ff5858;
`;

const RIText = styled.Text`
  height: 54px;
  background: #ffffff;
  line-height: 54px;
  font-weight: 700;
  font-size: 16px;
  padding-left: 16px;
`;

const ChosenPhoto = styled.Image`
  width: 100%;
`;
const Photo = styled.FlatList``;

const ImageButton = styled.TouchableOpacity``;

const NUM_COLUMN = 4;
const windowWidth = Dimensions.get("window").width;

export default function SelectPhoto() {
  const [photos, setPhotos] = useState([]);
  const [chosenPhoto, setChosenPhoto] = useState("");
  const stackNavigation =
    useNavigation<StackNavigationProp<StartStackParamList>>();
  const startStackNavigation =
    useNavigation<StackNavigationProp<StartStackParamList>>();

  const renderItem = ({ item: photo }) => (
    <ImageButton onPress={() => setChosenPhoto(photo.uri)}>
      <Image
        source={{ uri: photo.uri }}
        style={{ width: windowWidth / 4, height: windowWidth / 4 }}
      />
    </ImageButton>
  );

  const handleCancelButton = () => {
    stackNavigation.navigate("Main");
  };

  const handleNextButton = () => {
    startStackNavigation.navigate("WriteContent", { imageUri: chosenPhoto });
  };

  const getPhotos = async () => {
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
    setChosenPhoto(photos[0].uri);
  };

  useEffect(() => {
    if (Platform.OS === "ios") {
      withIOSPermissions(getPhotos);
    } else {
      withAndroidPermissions(getPhotos);
    }
  }, []);

  return (
    <Wrapper>
      <Header>
        <CancelButton onPress={handleCancelButton}>
          <AntDesign name="close" size={28} color="#9f9f9f" />
        </CancelButton>
        <NextButton onPress={handleNextButton}>
          <NextText>다음</NextText>
        </NextButton>
      </Header>
      {chosenPhoto !== "" && (
        <ChosenPhoto
          style={{ width: windowWidth, height: windowWidth }}
          source={{ uri: chosenPhoto }}
        />
      )}
      <RIText>최근 항목</RIText>
      <Photo
        data={photos}
        numColumns={NUM_COLUMN}
        renderItem={renderItem}
      ></Photo>
    </Wrapper>
  );
}
