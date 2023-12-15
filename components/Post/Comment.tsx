import React, { useEffect } from 'react'
import styled from 'styled-components/native'


const Wrapper = styled.View`
  
`

const RootComment = styled.View`
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
  padding-left: 10px;
  color: #8f8f8f;
`

const SubComments = styled.View`
  padding-left: 30px;
`
type CommentProps = {
  data: any
  handleReplyButton ?: Function

}

export default function PostComment({ data, handleReplyButton }: CommentProps) {
  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <Wrapper>
      <RootComment>
      <Username>{data.nickname}</Username>
      <Content>{data.content}</Content>
      {handleReplyButton && <ReplyButton onPress={() => handleReplyButton(data)}>답글 달기</ReplyButton>}
      </RootComment>
      
      
      <SubComments>
        {data.subComments && data.subComments.map(sub => {
          return <PostComment data={sub} />
        })}
      </SubComments>
    </Wrapper>
  )
}
