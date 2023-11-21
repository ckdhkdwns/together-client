import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";

const Wrapper = styled.View`
  display: flex;
  padding-top: 20px;
  height: 100%;
`;

const SelectedImage = styled.Image`
    
`

const RIText = styled.Text`
    
`

export default function WritePost() {
  const [photos, setPhotos] = useState([]);
  const [chosenPhoto, setChosenPhoto] = useState("");
  const [ok, setOk] = useState(false);
  const getPhotos = async () => {
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
    // 첫번째 사진 선택을 기본값으로
    setChosenPhoto(photos[0]?.uri);
  };
  const getPermissions = async () => {
    const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();

    if (status === "undetermined" && canAskAgain) {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "undetermined") {
        setOk(true);
        getPhotos();
      }
    } else if (status !== "undetermined") {
      setOk(true);
      getPhotos();
    }
  };

  useEffect(() => {
    getPermissions();
  }, [])

  
  return <Wrapper>
    <SelectedImage source={{ uri: photos[0].uri }}/>
    <RIText>최근 항목</RIText>
  </Wrapper>;
}
