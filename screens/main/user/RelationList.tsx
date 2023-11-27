import { userInfoAtom, userPageStateAtom } from "atoms";
import UserItem from "components/Relation/UserItem";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { Users } from "utils/dummyUsers";
import { Feather } from "@expo/vector-icons";

const Wrapper = styled.View`
  background: #ffffff;
  align-items: center;
  height: 100%;
`;

const Header = styled.View`
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const UserEmail = styled.Text`
  font-size: 21px;
  margin: 10px 0;
`;

const Search = styled.View`
  height: 50px;
  background: #f2f2f2;
  position: relative;
  margin-top: 15px;
  width: 90%;
  border-radius: 10px;
`;
const SearchInput = styled.TextInput`
  height: 50px;
  margin-left: 50px;
  font-size: 21px;
`;


const Icon = styled.View`
  position: absolute;
  left: 5px;
  top: 3px;
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 15px;
  background: #efefef;
`
const ToggleWrapper = styled.View`
  flex-direction: row;
  width: 88%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 0;
`
const ToggleTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`
const Toggles = styled.View`
  display: flex;
  flex-direction: row-reverse;
  width: 25%;
  margin-top: 5px;
  gap: 10px;
`;
const UserList = styled.View`
  width: 90%;
  margin-top: 10px;
  background: #efefef;
  gap: 1px;
`;

const Button = styled.TouchableOpacity`
  height: 30px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #dfdfdf; */
  /* border: 1px solid #efefef; */
`;

const FollowingsButton = styled(Button)`
  /* background: #ff5858; */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
`;
const FollowersButton = styled(Button)`
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  /* background-color: #f7f7f7; */
`;

const FgText = styled.Text`
  text-decoration: underline;
  text-decoration-color: #ff5858;
  color: #ff5858;
  font-size: 14px;
  font-weight: 600;
`;
const FrText = styled.Text`
  text-decoration: underline;
  text-decoration-color: #8f8f8f;
  font-weight: 500;
  color: #8f8f8f;
  font-size: 14px;
`;


export default function RelationList() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userList, setUserList] = useState(Users);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "팔로잉", value: "1" },
    { label: "팔로워", value: "2" },
  ]);

  return (
    <Wrapper>
      <Header>
        {/* <UserEmail>{userInfo.email}</UserEmail> */}
      </Header>
      <Search>
        <SearchInput placeholder={userInfo.email}/>
        <Icon>
          <Feather size={24} color="#9a9a9a" name="search" />
        </Icon>
      </Search>
      <Divider></Divider>
      <ToggleWrapper>
        <ToggleTitle>팔로잉 목록</ToggleTitle>
      <Toggles>
          <FollowingsButton>
            <FgText>팔로잉</FgText>
          </FollowingsButton>
          <FollowersButton>
            <FrText>팔로워</FrText>
          </FollowersButton>
        </Toggles>
      </ToggleWrapper>
      
      <UserList>
        {userList.map((user) => {
          return <UserItem user={user} />;
        })}
      </UserList>
    </Wrapper>
  );
}
