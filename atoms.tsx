import { atom } from "recoil";

export const userPageStateAtom = atom({
  key: "userPageState",
  default: "profile", // profile, edit, write, post(user's specific post)
});

export const userInfoAtom = atom({
  key: "userInfo",
  default: {
    imageUrl: 'https://i.namu.wiki/i/BUfLDpFP8k1uLdcS8f0ZRiJ0hy3ZNMe0pra8ycRG0g1djLKpOptj3rCVl1aMpR2_7H6cjlfb0ZTlD-pHlE9BONpjTexq6kku73pu8THuVGdbJQGitZ6fUods3SCnOau3eUd9k_ZSbdEHl90Zoh530w.webp',
    email: "Circle@changwon.ac.kr",
    postCount: 3,
    followerCount: 56,
    followingCount: 52,
    name: "동그라미",
    description: "안녕하세요!",
  },
});
