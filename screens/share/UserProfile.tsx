import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import InfoItem from "../../components/UserProfile/InfoItem";
import { FontAwesome } from "@expo/vector-icons";
import { userInfoAtom, userPageStateAtom } from "atoms";
import { useRecoilState } from "recoil";
import UserHeader from "components/PageHeader/UserHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  background: #ffffff;
  border: 0px solid #f8f8f8;
  border-bottom: 2px;
`;
const Information = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px;
  background: #dfdfdf;
  border-radius: 50px;
`;

const InfoWrapper = styled.View`
  display: flex;
  gap: 15px;
  margin-top: 12px;
`;

const InfoItems = styled.View`
  display: flex;
  flex-direction: row;
  gap: 1px;
  justify-content: center;
  background: #efefef;
`;

const Email = styled.Text`
  margin-left: 15px;
  font-size: 20px;
`;

const Footer = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-bottom: 10px;
`;
const NameWrapper = styled.View`
  display: flex;
  gap: 7px;
  margin: 10px 10px 0px 10px;
`;

const Username = styled.Text`
  font-size: 20px;
`;
const Description = styled.Text`
  font-size: 14px;
  color: #686868;
`;

const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const EditProfileButton = styled.TouchableOpacity`
  background: #ff5858;
  border-radius: 20px;
  padding: 0 5px;
`;
const EPText = styled.Text`
  color: #ffffff;
  font-weight: 600;
  margin: 10px;
`;

const ShowMarkedButton = styled.TouchableOpacity``;


type UserProfile = {
  articleCount: number;
  articles: {
    id: number,
    image: string
  },
  email: string
  followerCount: number
  followingCount: number
  introduce: string
  nickname: string
  profileImage: string
} 

export default function UserProfile({ navigation }) {
  const [userInfo, setUserInfo] = useRecoilState<UserProfile>(userInfoAtom);

  const handleEditButton = () =>{
    navigation.navigate("Edit")
  }
  const handleFollowsButton = () => {
    navigation.navigate("Follows")
  }

  const initProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserInfo(res.data.result);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    initProfile();
  }, [])

  return (
    <Wrapper>
      <Information>
        <ProfileImage source={{ uri: userInfo?.profileImage }} />
        <InfoWrapper>
          <Email>{userInfo?.email}</Email>
          <InfoItems>
            <InfoItem title="게시물" value={userInfo?.articleCount} />
            <InfoItem onPress={handleFollowsButton} title="팔로워" value={userInfo?.followerCount} />
            <InfoItem onPress={handleFollowsButton}title="팔로잉" value={userInfo?.followingCount} />
          </InfoItems>
        </InfoWrapper>
      </Information>
      <Footer>
        <NameWrapper>
          <Username>{userInfo?.nickname}</Username>
          <Description>{userInfo?.introduce}</Description>
        </NameWrapper>
        <ButtonsWrapper>
          <EditProfileButton onPress={handleEditButton}>
            <EPText>프로필 편집</EPText>
          </EditProfileButton>
          <ShowMarkedButton>
            <FontAwesome name="star" size={34} color="#FFD600" />
          </ShowMarkedButton>
        </ButtonsWrapper>
      </Footer>
    </Wrapper>
  );
}
