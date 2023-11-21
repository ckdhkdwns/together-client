import { userInfoAtom, userPageStateAtom } from "atoms";
import EditProfile from "components/EditProfile/EditProfile";
import UserHeader from "components/PageHeader/User";
import UserProfile from "components/UserProfile/UserProfile";
import WritePost from "components/WritePost/WritePost";
import React, { useState } from "react";
import { Text } from "react-native";
import { useRecoilState } from "recoil";

import styled from "styled-components/native";

const Wrapper = styled.SafeAreaView`
  background: #ffffff;
`;

export default function User() {
  const [userPageState, setUserPageState] = useRecoilState(userPageStateAtom); // profile, edit, writePost, viewPost(user's specific post)

  const userBody = () => {
    if(userPageState == 'profile') return <UserProfile/>;
    else if(userPageState == 'edit') return <EditProfile/>
    else if(userPageState == "write") return <WritePost />;
  }
  return (
    <Wrapper>
      <UserHeader />
      {userBody()}
      
    </Wrapper>
  );
}
