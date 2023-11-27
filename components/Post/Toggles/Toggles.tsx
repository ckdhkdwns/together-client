import React from "react";
import styled from "styled-components/native";
import HeartButton from "./HeartButton";
import MarkButton from "./MarkButton";


const Wrapper = styled.View`
  display: flex;
  
  flex-direction: row;
  justify-content: space-between;
  gap: 20px; 
  height: 50px;
  align-items: center;
  padding: 15px;
`;

const Left = styled.View`
  flex-direction: row;
  gap: 20px;
`
type TogglesProps = {
  likeCount: number;

  isLiked: boolean;
  isMarked: boolean;

  handleLike: Function;
  handleMark: Function;
};
export default function Toggles({
  likeCount,
  isLiked,
  isMarked,
  handleLike,
  handleMark,
}: TogglesProps) {
  return (
    <Wrapper>
      <Left>
      <HeartButton
        isLiked={isLiked}
        likeCount={likeCount}
        handleLike={handleLike}
      />
 
      </Left>
      
      <MarkButton isMarked={isMarked} handleMark={handleMark} />
      
    </Wrapper>
  );
}
