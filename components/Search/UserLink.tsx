import React, { useEffect } from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  position: relative;
  background: #ffffff;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin-right: 15px;
`;

const Info = styled.View`
  display: flex;
  gap: 5px;
`
const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #afafaf;
`

export default function UserLink({ handleUserLink, user }) {
  return (
    <Wrapper onPress={() => handleUserLink(user.userId)}>
      <ProfileImage source={{ uri: user.profileImgUrl }} />
      <Info>
      <Name>{user.nickname}</Name>
      <Description>팔로워 { user.followerCount} 팔로잉 {user.followingCount}</Description>
      </Info>
    </Wrapper>
  );
}
