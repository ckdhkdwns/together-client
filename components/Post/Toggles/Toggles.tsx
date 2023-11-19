import React from 'react'
import styled from 'styled-components/native';
import HeartButton from './HeartButton';
import MarkButton from './MarkButton';

const Wrapper = styled.View`
    height: 30px;
`

type TogglesProps = {
  likeCount : number;

  isLiked : boolean;
  isMarked : boolean;

  handleLike : Function;
  handleMark : Function;
}
export default function Toggles({ likeCount, isLiked, isMarked, handleLike, handleMark }: TogglesProps) {
  return (
    <Wrapper>
        <HeartButton isLiked={isLiked} likeCount={likeCount} handleLike={handleLike}/>
        <MarkButton isMarked={isMarked} handleMark={handleMark}/>
    </Wrapper>
  )
}
