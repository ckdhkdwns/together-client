import React from 'react'
import styled from 'styled-components/native'


const Wrapper = styled.View`
  display: flex;
`

const Username = styled.Text``
const Content = styled.Text``
type CommentProps = {
  username: string;
  content: string;
}

export default function PostComment({ username, content }: CommentProps) {
  return (
    <Wrapper>
      <Username>{username}</Username>
      <Content>{content}</Content>
    </Wrapper>
  )
}
