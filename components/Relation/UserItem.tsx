import React from "react";
import styled from "styled-components/native";
import RelationButton from "./RelationButton";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
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


export default function UserItem({ user, handleFollow, handleCancel }) {
  return (
    <Wrapper>
      <ProfileImage source={{ uri: user.profileImgUrl }} />
      <Info>
      <Name>{user.nickname}</Name>
      <Description>팔로워 { user.followerCount} 팔로잉 {user.followingCount}</Description>
      </Info>
      
      <RelationButton handleFollow={handleFollow} handleCancel={handleCancel} user={user} />
    </Wrapper>
  );
}
