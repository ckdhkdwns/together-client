import { atom } from "recoil";

export const editProfileDataAtom = atom({
  key: "editProfileImageUrl",
  default: {
    profileImageUrl: "",
    nickname: "",
    description: "",
    isImageDeleted: false
  }
})

export const userInfoAtom = atom<UserProfile>({
  key: "userInfo",
  default:{
    postCount: 0,
    posts: [{ id: 0, imgUrl: "" }],
    articles: {
      id: 0,
      image: ""
    },
    email: "",
    followerCount: 0,
    followingCount: 0,
    introduce: "",
    nickname: "",
    profileImgUrl: "",
    isFollowing: false
  }
});
