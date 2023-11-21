import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const Username = styled.Text`
    font-size: 25px;
    color: #686868;
`

type UserLinkProps = {
  name: string;
};
export default function UserLink({ name }: UserLinkProps) {
  return <Wrapper>
    <Username>{name}</Username>
  </Wrapper>;
}
