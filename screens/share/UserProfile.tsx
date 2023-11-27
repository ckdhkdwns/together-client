import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import InfoItem from "../../components/UserProfile/InfoItem";
import { FontAwesome } from "@expo/vector-icons";
import { userInfoAtom, userPageStateAtom } from "atoms";
import { useRecoilState } from "recoil";
import UserHeader from "components/PageHeader/UserHeader";

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

export default function UserProfile({ navigation }) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);


  const handleEditButton = () =>{
    navigation.navigate("Edit")
  }
  const handleFollowsButton = () => {
    navigation.navigate("Follows")
  }

  return (
    <Wrapper>
      <Information>
        <ProfileImage source={{ uri: userInfo.imageUrl }} />
        <InfoWrapper>
          <Email>{userInfo.email}</Email>
          <InfoItems>
            <InfoItem title="게시물" value={userInfo.postCount} />
            <InfoItem onPress={handleFollowsButton} title="팔로워" value={userInfo.followerCount} />
            <InfoItem onPress={handleFollowsButton}title="팔로잉" value={userInfo.followingCount} />
          </InfoItems>
        </InfoWrapper>
      </Information>
      <Footer>
        <NameWrapper>
          <Username>{userInfo.name}</Username>
          <Description>{userInfo.description}</Description>
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
