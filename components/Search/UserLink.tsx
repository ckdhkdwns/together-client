import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  padding: 18px 6px;
  background: #ffffff;
`;

const Username = styled.Text`
    font-size: 16px;
    color: #010101;
`


export default function UserLink({ user }) {
  return <Wrapper
  activeOpacity={1}
  >
    <Username>{user.item}</Username>
  </Wrapper>;
}
