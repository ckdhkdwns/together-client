import React from "react";
import styled from "styled-components/native";

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

const Button = styled.TouchableOpacity`
  width: 90px;
  height: 30px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
`;
const FollowButton = styled(Button)`
  background: #ff5858;
`;

const CancelButton = styled(Button)`
  background: transparent;
  border: 1px solid #dfdfdf;
`;

const FText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
`;
const CText = styled.Text`
  font-size: 14px;
  color: #121212;
`;
export default function UserItem({ user }) {
  return (
    <Wrapper>
      <ProfileImage source={{ uri: user.profileImage }} />
      <Info>
      <Name>{user.name}</Name>
      <Description>팔로워 { user.followerCount} 팔로잉 {user.followingCount}</Description>
      </Info>
      
      {user.isFollowing ? (
        <CancelButton>
          <CText>팔로우 취소</CText>
        </CancelButton>
      ) : (
        <FollowButton>
          <FText>팔로우</FText>
        </FollowButton>
      )}
    </Wrapper>
  );
}
