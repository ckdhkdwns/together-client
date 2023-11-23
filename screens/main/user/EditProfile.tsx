import React, { useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { useRecoilState } from "recoil";
import { userInfoAtom, userPageStateAtom } from "atoms";
import Form from "../../../components/EditProfile/Form";

import * as ImagePicker from "expo-image-picker";
import ChangeImageModal from "../../../components/EditProfile/ChangeImageModal";
import UserHeader from "components/PageHeader/UserHeader";

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
  margin: 10px;
`;
const CIText = styled.Text`
  font-size: 25px;
  color: #ff5858;
  font-weight: 600;
`;
export default function EditProfile() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const [imageUrl, setImageUrl] = useState(userInfo.imageUrl);

  const pickImage = async () => {
    if (!status?.granted) {
      const permissions = await requestPermission();
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
      const [{ uri }] = result.assets;
      setUserInfo({
        ...userInfo,
        imageUrl: uri,
      });
      setImageUrl(uri);
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
    setImageUrl(null);
    setIsModalOpen(false);
  };
  return (
    <Wrapper>
      <Modal isVisible={isModalOpen}>
        <ChangeImageModal
          handleImageButton={handleImageButton}
          handleDeleteButton={handleDeleteButton}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <ImageWrapper>
        <ProfileImage
          source={
            imageUrl ? { uri: imageUrl } : require("assets/anonymous.png")
          }
        />
        <ChangeImageButton onPress={handleModal}>
          <CIText>사진 수정</CIText>
        </ChangeImageButton>
      </ImageWrapper>

      <Form _type="닉네임" value={userInfo.name} />
      <Form _type="소개글" value={userInfo.description} />
    </Wrapper>
  );
}
