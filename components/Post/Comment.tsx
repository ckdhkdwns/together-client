import React, { useEffect } from 'react'
import styled from 'styled-components/native'


const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px 0px;
  align-items: center;
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

const ReplyButton = styled.Text`
  padding-left: 5px;
  color: #8f8f8f;
`
type CommentProps = {
  username: string;
  content: string;
}

export default function PostComment({ data, handleReplyButton }) {
  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <Wrapper>
      <Username>{data.item.nickname}</Username>
      <Content>{data.item.content}</Content>
      <ReplyButton onPress={() => handleReplyButton(data.item)}>답글 달기</ReplyButton>
    </Wrapper>
  )
}
