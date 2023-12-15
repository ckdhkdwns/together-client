import React, { useState } from "react";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { editProfileDataAtom } from "atoms";

const Wrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BottomBar = styled.View`
  position: absolute;
  background: #afafaf21;
  bottom: 0;
  height: 15%;
  width: 100%;
`;
const FlipButton = styled.TouchableOpacity`
  position: absolute;
  background: #cfcfcf30;
  height: 60px;
  width: 60px;
  border-radius: 40px;
  bottom: 40px;
  right: 30px;
  justify-content: center;
  align-items: center;
`;
const TakeButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  position: absolute;
  border: 5px solid #efefef;
  border-radius: 100px;
  bottom: 30px;
`;

const InnerTakebutton = styled.View`
  background: #efefef;
  width: 64px;
  height: 64px;
  border-radius: 60px;
  margin: auto auto;
`;


export default function ProfileCamera({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [editProfileData, setEditProfileData] = useRecoilState(editProfileDataAtom);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const handleTakePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setEditProfileData({
        ...editProfileData,
        profileImageUrl: data.uri,
        isImageDeleted: false,
      });
      navigation.navigate("Edit");
    }
  };

  const windowWidth = Dimensions.get("window").width;

  return (
    <Wrapper>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={{ flex: 1, width: "100%", height: "100%" }}
        autoFocus={AutoFocus.on}
        type={type}
      ></Camera>
      <BottomBar>
        <TakeButton
          onPress={handleTakePicture}
          style={{
            left: windowWidth / 2 - 40,
          }}
        >
          <InnerTakebutton />
        </TakeButton>
        <FlipButton onPress={toggleCameraType}>
          <AntDesign name="sync" size={26} color="black" />
        </FlipButton>
      </BottomBar>
    </Wrapper>
  );
}
