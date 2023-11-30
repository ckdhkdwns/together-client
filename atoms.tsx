import { atom } from "recoil";

export const userPageStateAtom = atom({
  key: "userPageState",
  default: "profile", // profile, edit, write, post(user's specific post)
});

export const userInfoAtom = atom<UserProfile>({
  key: "userInfo",
  default:{
    postCount: 0,
    articles: {
      id: 0,
      image: ""
    },
    email: "",
    followerCount: 0,
    followingCount: 0,
    introduce: "",
    nickname: "",
    profileImgUrl: ""
  }
});
