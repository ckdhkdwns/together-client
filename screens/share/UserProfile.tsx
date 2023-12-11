import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import InfoItem from "../../components/UserProfile/InfoItem";
import { FontAwesome } from "@expo/vector-icons";
import { userInfoAtom, userPageStateAtom } from "atoms";
import { useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import PostImages from "components/UserProfile/PostImages/PostImages";
import RelationButton from "components/Relation/RelationButton";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0px solid #f8f8f8;
  border-bottom: 2px;
`;
const Information = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px 10px 20px;
  width: 100%;
  margin-bottom: 5px;
`;

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin-top: 10px;
  margin-left: 20px;
`;

const InfoWrapper = styled.View`
  display: flex;
  width: 70%;
  padding: 8px 10px;
`;

const InfoHeader = styled.View`
  flex-direction: row;
`;
const InfoItems = styled.View`
  display: flex;
  flex-direction: row;

  margin: 20px auto 0;
  gap: 1px;
`;

const Username = styled.Text`
  font-size: 21px;
  font-weight: 500;
`;

const Email = styled.Text`
  font-size: 20px;
  padding-left: 15px;
`;

const Middle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 20px;
  position: relative;
`;
const NameWrapper = styled.View``;

const Description = styled.Text`
  margin-top: 3px;
  font-size: 16px;
  color: #7f7f7f;
`;


const EditProfileButton = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 2px 5px 0;
`;

const ShowMarkedButton = styled.TouchableOpacity``;

type UserProfile = {
  postCount: number;
  articles: {
    id: number;
    image: string;
  };
  email: string;
  followerCount: number;
  followingCount: number;
  introduce: string;
  nickname: string;
  profileImage: string;
};

export default function UserProfile({ navigation, route }) {
  const [isMyProfile, SetIsMyProfile] = useState(
    route.params.userId == undefined
  );
  // 내 프로필 조회는 params로 undefined가 들어온다.
  // 다른 사람의 프로필을 보는 경우 그 사람의 userID가 들어온다.
  const [userInfo, setUserInfo] = !route.params.userId
    ? useRecoilState(userInfoAtom)
    : useState();

  const handleEditButton = () => {
    navigation.navigate("Edit");
  };

  const handleRelationButton = (mode) => {
    navigation.navigate("Relations", { listMode: mode });
  };

  const loadOtherProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.get(
        `${process.env.SERVER_IP}/api/user/${route.params.userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMyProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.get(`${process.env.SERVER_IP}/api/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(res.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFollowButton = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/user/follow/${route.params.userId}`,
        {
          userId: route.params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo({
        ...userInfo,
        isFollowing: true,
        followerCount: userInfo.followerCount + 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowButton = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.delete(
        `${process.env.SERVER_IP}/api/user/follow/${route.params.userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserInfo({
        ...userInfo,
        isFollowing: false,
        followerCount: userInfo.followerCount - 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleMarkButton = () => {
    navigation.navigate("FavoriteList", { isFavoriteList: true });
  };

  useEffect(() => {
    if (route.params.userId) {
      loadOtherProfile();
    } else {
      loadMyProfile();
    }
  }, []);

  return (
    <Wrapper>
      <Information>
        <ProfileImage source={{ uri: userInfo?.profileImgUrl }} />
        <InfoWrapper>
          <InfoHeader>
            <Email>{userInfo?.email}</Email>
            {isMyProfile && (
              <EditProfileButton onPress={handleEditButton}>
                <AntDesign name="edit" size={18} color="#7f7f7f" />
              </EditProfileButton>
            )}
          </InfoHeader>

          <InfoItems>
            <InfoItem
              onPress={() => {}}
              title="게시물"
              value={userInfo?.postCount}
            />
            <InfoItem
              onPress={() => handleRelationButton("팔로워")}
              title="팔로워"
              value={userInfo?.followerCount}
            />
            <InfoItem
              onPress={() => handleRelationButton("팔로잉")}
              title="팔로잉"
              value={userInfo?.followingCount}
            />
          </InfoItems>
        </InfoWrapper>
      </Information>
      <Middle>
        <NameWrapper>
          <Username>{userInfo?.nickname}</Username>
          <Description>{userInfo?.introduce}</Description>
        </NameWrapper>
        {isMyProfile ? (
          <ShowMarkedButton onPress={handleMarkButton}>
            <FontAwesome name="star" size={24} color="#f8cd2e" />
          </ShowMarkedButton>
        ) : <RelationButton handleFollow={handleFollowButton} handleCancel={handleUnFollowButton} user={userInfo}/>}
      </Middle>

      <PostImages postImageUrls={userInfo?.posts} />
    </Wrapper>
  );
}
