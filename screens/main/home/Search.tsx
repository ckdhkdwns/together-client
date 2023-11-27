import SettingHeader from "components/PageHeader/SettingHeader";
import React, { useState } from "react";
import styled from "styled-components/native";
import HomeHeader from "../../../components/PageHeader/HomeHeader";
import { Feather } from "@expo/vector-icons";
import UserLink from "../../../components/Search/UserLink";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center ;
  position: relative;
  width: 100%;
  padding: 15px 20px;
`;
const InputUsername = styled.TextInput`
  font-size: 21px;
  padding: 10px 19px;
  padding-left: 50px;
  border: 0px solid #f8f8f8;
  background: #f3f3f3;
  width: 100%;
  border-radius: 10px;
`;
const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  left: 20px;
`;

const UserList = styled.FlatList`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 0px solid #efefef;
  border-top-width: 1px;
  gap: 1px;
`;
export default function Search() {
  const [users, setUsers] = useState<string[]>(["동그라미", "동그의자자"]);
  return (
    <Wrapper>
      <Header>
        <InputUsername placeholder="검색" />
        <SearchButton>
          <Feather size={27} color="#afafaf" name="search" />
        </SearchButton>
      </Header>

      <UserList
        contentContainerStyle={{
          
          gap: 1,
          backgroundColor: "#efefef"
        }}
        data={users}
        renderItem={(item) => {
          return <UserLink user={item} />
        }}
      >
      </UserList>
    </Wrapper>
  );
}
