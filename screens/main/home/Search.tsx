import SettingHeader from "components/PageHeader/SettingHeader";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import HomeHeader from "../../../components/PageHeader/HomeHeader";
import { Feather } from "@expo/vector-icons";
import UserLink from "../../../components/Search/UserLink";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import UserItem from "components/Relation/UserItem";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 10px 15px;
`;
const InputUsername = styled.TextInput`
  font-size: 16px;
  padding: 12px 19px;
  padding-left: 45px;
  border: 0px solid #f8f8f8;
  background: #f3f3f3;
  width: 100%;
  border-radius: 10px;
`;
const SearchButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
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

type ResultUser = {
  nickname: string;
  userId: number;
}
export default function Search({ navigation }) {
  const [users, setUsers] = useState<ResultUser[]>();
  const [detailUsers, setDetailUsers] = useState<UserProfile[]>();

  const handleChangeText = async(text) => {
    if(text == "") return;
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.get(`${process.env.SERVER_IP}/api/user/search/${text}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(res.data.result)
    } catch(error) {
      console.log(error)
    }
  }

    // id 리스트를 full profile 리스트로 변환
    const convertIdsToProfiles = async () => {
      const tempUserList = [];
      const token = await AsyncStorage.getItem("token");
      for (let i = 0; i < users.length; i++) {
        try {
          const res = await axios.get(
            `${process.env.SERVER_IP}/api/user/${users[i].userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          res.data.result.userId = users[i].userId;
          tempUserList.push(res.data.result);
        } catch (error) {
          console.error(error);
        }
      }
      setDetailUsers(tempUserList);
    };

  const handleUserLink = (userId:number) => {
    console.log(userId)
    navigation.navigate("OtherProfile", { userId: userId });
  };

  useEffect(() => {
    convertIdsToProfiles();
  }, [users])

  
  return (
    <Wrapper>
      <Header>
        <InputUsername placeholder="검색" onChangeText={handleChangeText}/>
        <SearchButton>
          <Feather size={20} color="#afafaf" name="search" />
        </SearchButton>
      </Header>

      <UserList
        contentContainerStyle={{
          gap: 1,
          backgroundColor: "#efefef",
        }}
        data={detailUsers}
        renderItem={(item) => {
          return <UserLink handleUserLink={handleUserLink} user={item.item} />;
        }}
      ></UserList>
    </Wrapper>
  );
}
