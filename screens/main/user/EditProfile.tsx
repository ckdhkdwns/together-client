import React, { useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { useRecoilState } from "recoil";
import { userInfoAtom, userPageStateAtom } from "atoms";
import Form from "../../../components/EditProfile/Form";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from 'expo-file-system';


import * as ImagePicker from "expo-image-picker";
import ChangeImageModal from "../../../components/EditProfile/ChangeImageModal";
import ImgToBase64 from 'react-native-image-base64';
import RNFS from 'react-native-fs';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUrl, setImageUrl] = useState(userInfo.profileImage);

  const [form, setForm] = useState({
    nickname: userInfo.nickname,
    introduce: userInfo.introduce,
    profileImgUrl: userInfo.profileImage
  })

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
      setImageUrl(uri);

      // 이미지를 base64형태로 인코딩
      // const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
      // console.log(base64.length)
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

  const handleEditProfile = async () => {
    const token = await AsyncStorage.getItem('token')
    console.log(token);
    try {
      const data = {
        ...form,
        ['profileImgUrl']: 'dummyurl'
      }
      console.log(data);
      const res = await axios.patch(`${process.env.SERVER_IP}/api/user/info`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(res.data.success) {
        setUserInfo({
          ...userInfo,
          ['nickname']: data.nickname,
          ['introduce']: data.introduce,
          ['profileImage']: 'dummy'
        })
        navigation.navigate("Profile")
      }
    } catch(error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   console.log(userInfo)
  // }, [userInfo])

  const handleInputChange = (text, inputType) => {
    setForm({
      ...form,
      [inputType]: text,
    });
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
      
      <Form inputType="닉네임" onChangeText={(text) => handleInputChange(text, "nickname")} value={form.nickname} />
      <Form inputType="소개글" onChangeText={(text) => handleInputChange(text, "introduce")} value={form.introduce} />
      <ConfirmButton onPress={handleEditProfile}>
        <Feather name="check" size={30} color="#ff5858" />
      </ConfirmButton>
    </Wrapper>
  );
}
