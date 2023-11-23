import SettingHeader from "components/PageHeader/SettingHeader";
import React, { useState } from "react";
import styled from "styled-components/native";
import HomeHeader from "../../../components/PageHeader/HomeHeader";
import { Feather } from "@expo/vector-icons";
import UserLink from "../../../components/Search/UserLink";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center ;
`;
const InputUsername = styled.TextInput`
  font-size: 25px;
  padding: 19px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
`;
const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  background: #ff5858;
  position: absolute;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  right: 15px;
`;

const UserList = styled.View`
  display: flex;
  flex-direction: column;
`;
export default function Search() {
  const [users, setUsers] = useState(["동그라미", "동그의자자"]);
  return (
    <Wrapper>
      <Header>
        <InputUsername placeholder="검색" />
        <SearchButton>
          <Feather size={32} color="#ffffff" name="search" />
        </SearchButton>
      </Header>

      <UserList>
        {users.map((name) => (
          <UserLink name={name} />
        ))}
      </UserList>
    </Wrapper>
  );
}
