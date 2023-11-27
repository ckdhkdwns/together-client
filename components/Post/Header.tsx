import React from 'react'
import styled from 'styled-components/native';

const Wrapper = styled.View`
    display: flex;
    height: 70px;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    gap: 10px;
`
const Info = styled.View`
  margin-top: 4px;
  gap: 4px;
`
const Username = styled.Text`
    font-size: 16px;
    font-weight: 600;
`

const ProfileImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 40px;
  margin-left: 10px;
`

const Datetime = styled.Text`
  font-size: 14px;
  color: #8f8f8f;
`

type PostHeaderProps = {
    image: string;
    username: string,
    writedAt: string,
}
export default function PostHeader({ image, username, writedAt }:PostHeaderProps) {
  return (
    <Wrapper>
        <ProfileImage source={{ uri: image }} />
        <Info>
        <Username>{username}</Username>
        <Datetime>{writedAt}</Datetime>
        </Info>
        
    </Wrapper>
  )
}
