import React from 'react'
import styled from 'styled-components/native'


const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px 0px;
`

const Username = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-right: 12px;
`

const Content = styled.Text`
  font-size: 16px;
  color: #000000;
`
type CommentProps = {
  username: string;
  content: string;
}

export default function PostComment({ data }) {
  return (
    <Wrapper>
      <Username>{data.item.username}</Username>
      <Content>{data.item.content}</Content>
    </Wrapper>
  )
}
