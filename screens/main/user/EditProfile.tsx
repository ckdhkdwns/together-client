import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { useRecoilState } from "recoil";
import { editProfileDataAtom, userInfoAtom } from "atoms";
import Form from "../../../components/EditProfile/Form";
import { Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";

import FormData from "form-data";
import * as ImagePicker from "expo-image-picker";
import ChangeImageModal from "../../../components/EditProfile/ChangeImageModal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";
import ProfileCamera from "screens/camera/ProfileCamera";

const Wrapper = styled.View`
  display: flex;
  padding-top: 20px;
  height: 100%;
  background: #ffffff;
`;

const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  background: #dfdfdf;
  border-radius: 75px;
`;

const ChangeImageButton = styled.TouchableOpacity`
  margin: 15px auto 20px;
`;
const CIText = styled.Text`
  font-size: 21px;
  color: #ff5858;
  font-weight: 600;
`;

const ConfirmButton = styled.TouchableOpacity`
  margin-left: 90%;
  width: 50px;


  height: 50px;
`;

export default function EditProfile({ navigation }) {
  const startStackNavigation =
    useNavigation<StackNavigationProp<StartStackParamList>>();
  const [userInfo, setUserInfo] = useRecoilState<UserProfile>(userInfoAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [imageName, setImageName] = useState("");
  const [editProfileData, setEditProfileData] = useRecoilState(
    editProfileDataAtom
  );

  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();

  const pickImage = async () => {
    if (!status?.granted) {
      const permissions = await requestGalleryPermission();
      if (!permissions.granted) {
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });
    if (!!result) {
      const [{ uri, fileName }] = result.assets;
      setEditProfileData({
        ...editProfileData,
        isImageDeleted: false,
        profileImageUrl: uri
      });
      setImageName(fileName);
    }
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageButton = async () => {
    await pickImage();
    
    setIsModalOpen(false);
  };

  const handleDeleteButton = async () => {
    setEditProfileData({
      ...editProfileData,
      profileImageUrl: "",
      isImageDeleted: true
    });

    setIsModalOpen(false);
  };

  const handleCamera = async () => {
    if (!cameraPermission?.granted) {
      const res = await requestCameraPermission();

      console.log(res);
      if (!res?.granted) {
        Alert.alert(
          "카메라 권한이 필요합니다. 설정 - Expo Go 에서 카메라에 대한 권한을 허용해주세요."
        );
        return;
      }
    }
    setIsModalOpen(false);

    // 사진 찍는 스크린으로 이동
    startStackNavigation.navigate("ProfileCamera");
  };

  

  const handleInputChange = (text, inputType) => {
    setEditProfileData({
      ...editProfileData,
      [inputType]: text,
    });
  };

  useEffect(() => {
    setEditProfileData({
      nickname: userInfo.nickname,
      description: userInfo.introduce,
      profileImageUrl: userInfo.profileImgUrl,
      isImageDeleted: false
    });
  }, []);

  return (
    <Wrapper>
      <Modal isVisible={isModalOpen}>
        <ChangeImageModal
          handleCamera={handleCamera}
          handleImageButton={handleImageButton}
          handleDeleteButton={handleDeleteButton}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <ImageWrapper>
        <ProfileImage
          source={
            editProfileData.profileImageUrl
              ? { uri: editProfileData.profileImageUrl }
              : require("assets/anonymous.png")
          }
        />
        <ChangeImageButton onPress={handleModal}>
          <CIText>사진 수정</CIText>
        </ChangeImageButton>
      </ImageWrapper>

      <Form
        inputType="닉네임"
        onChangeText={(text) => handleInputChange(text, "nickname")}
        value={editProfileData.nickname}
      />
      <Form
        inputType="소개글"
        onChangeText={(text) => handleInputChange(text, "description")}
        value={editProfileData.description}
      />
        
      {/* <ConfirmButton onPress={handleEditProfile}>
          <Feather name="check" size={30} color="#ff5858" />
        </ConfirmButton> */}
    </Wrapper>
  );
}
