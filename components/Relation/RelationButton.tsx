import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
    display: flex;
    position: absolute;
    right: 0px;
`
const Button = styled.TouchableOpacity`
  width: 90px;
  height: 30px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;

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

export default function RelationButton({ handleFollow, handleCancel, user }) {
    useEffect(() => {
        console.log("유저: ", user);
    }, [])
  return (
    <Wrapper>
        {user?.isFollowing ? (
        <CancelButton onPress={() => handleCancel(user.userId)}>
          <CText>팔로우 취소</CText>
        </CancelButton>
      ) : (
        <FollowButton onPress={() => handleFollow(user.userId)}>
          <FText>팔로우</FText>
        </FollowButton>
      )}
    </Wrapper>
  )
}
