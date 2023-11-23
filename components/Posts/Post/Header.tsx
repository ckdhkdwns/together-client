import React from 'react'
import styled from 'styled-components/native';

const Wrapper = styled.View`
    display: flex;
    height: 45px;
`
const Username = styled.Text`
    color: #686868;
    font-size: 25px;
`

type PostHeaderProps = {
    image: any; // 타입 모르겠음
    username: string
}
export default function PostHeader({ image, username }:PostHeaderProps) {
  return (
    <Wrapper>
        {/* image */}
        <Username>{username}</Username>
    </Wrapper>
  )
}
