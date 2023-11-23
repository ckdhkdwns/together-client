import React from 'react'
import styled from 'styled-components/native'
import Post from '../../../components/Post/Post'

const Wrapper = styled.View`
    display: flex;
    background: #ffffff;
`
export default function Posts() {
  return (
    <Wrapper>
        {/* {map contents} */}
        <Post />
    </Wrapper>
  )
}
