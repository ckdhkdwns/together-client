import React from "react";
import styled from "styled-components/native";
import HeartButton from "./HeartButton";
import MarkButton from "./MarkButton";

const Wrapper = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  height: 40px;
  align-items: center;
  padding: 15px 0 5px;
  border: 0px solid #efefef;
  /* border-bottom-width: 1px; */
`;

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
      <HeartButton
        isLiked={isLiked}
        likeCount={likeCount}
        handleLike={handleLike}
      />

      <MarkButton isMarked={isMarked} handleMark={handleMark} />
    </Wrapper>
  );
}
