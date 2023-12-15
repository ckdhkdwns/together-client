import { userInfoAtom } from "atoms";
import UserItem from "components/Relation/UserItem";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { Users } from "utils/dummyUsers";
import { Feather } from "@expo/vector-icons";
import ListModeButton from "components/Relation/ListModeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Text } from "react-native";

const Wrapper = styled.View`
  background: #ffffff;
  align-items: center;
  height: 100%;
`;

const Header = styled.View``;

const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 10px 15px;
`;

const Icon = styled.View`
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  left: 20px;
`;
const SearchInput = styled.TextInput`
  font-size: 16px;
  padding: 12px 19px;
  padding-left: 45px;
  border: 0px solid #f8f8f8;
  background: #f3f3f3;
  width: 100%;
  border-radius: 10px;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;

  background: #efefef;
`;
const ToggleWrapper = styled.View`
  flex-direction: row;
  width: 88%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 0;
`;
const ToggleTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const Toggles = styled.View`
  display: flex;
  flex-direction: row-reverse;
  width: 25%;
  margin-top: 5px;
  gap: 10px;
`;
const UserList = styled.FlatList`
  width: 90%;
  margin-top: 10px;

  gap: 1px;
`;

type IdProps = {
  nickname: string;
  userId: number;
};
export default function RelationList({ route }) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [idList, setIdList] = useState<IdProps[]>();
  const [userList, setUserList] = useState<UserProfile[]>([]);
  const [listMode, setListMode] = useState(route.params.listMode);

  const loadRelationList = async () => {
    const token = await AsyncStorage.getItem("token");

    const target = listMode == "팔로워" ? "follower" : "following";
    try {
      const res = await axios.get(
        `${process.env.SERVER_IP}/api/user/${target}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIdList(res.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // id 리스트를 full profile 리스트로 변환
  const convertIdsToProfiles = async () => {
    const tempUserList = [];
    const token = await AsyncStorage.getItem("token");
    for (let i = 0; i < idList.length; i++) {
      try {
        const res = await axios.get(
          `${process.env.SERVER_IP}/api/user/${idList[i].userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        res.data.result.userId = idList[i].userId;
        tempUserList.push(res.data.result);
      } catch (error) {
        console.error(error);
      }
    }
    setUserList(tempUserList);
  };

  const handleFollow = async (userId) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/user/follow/${userId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserList(userList.map((user) => {
        if (user.userId == userId) {
          user.isFollowing = true;
          user.followerCount += 1
        }
        return user;
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async (userId) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.delete(
        `${process.env.SERVER_IP}/api/user/follow/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (listMode == "팔로워")
        setUserList(
          userList.map((user) => {
            if (user.userId == userId) {
              user.isFollowing = false;
              user.followerCount -= 1
            }
            return user;
          })
        );
      else {
        setUserList(userList.filter((user) => user.userId != userId));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadRelationList();
  }, [listMode]);

  useEffect(() => {
    if (!idList) return;
    convertIdsToProfiles();
  }, [idList]);

  return (
    <Wrapper>
      <Header>{/* <UserEmail>{userInfo.email}</UserEmail> */}</Header>
      <Search>
        <SearchInput placeholder={userInfo.email} />
        <Icon>
          <Feather size={20} color="#afafaf" name="search" />
        </Icon>
      </Search>
      <Divider></Divider>
      <ToggleWrapper>
        <ToggleTitle>{listMode} 목록</ToggleTitle>
        <Toggles>
          <ListModeButton
            title="팔로잉"
            listMode={listMode}
            handleToggle={() => setListMode("팔로잉")}
          />
          <ListModeButton
            title="팔로워"
            listMode={listMode}
            handleToggle={() => setListMode("팔로워")}
          />
        </Toggles>
      </ToggleWrapper>

      <UserList
        data={userList}
        renderItem={(i) => (
          <UserItem
            user={i.item}
            handleFollow={handleFollow}
            handleCancel={handleCancel}
          />
        )}
      ></UserList>
    </Wrapper>
  );
}
