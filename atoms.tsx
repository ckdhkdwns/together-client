import { atom } from "recoil";

export const userPageStateAtom = atom({
  key: "userPageState",
  default: "profile", // profile, edit, write, post(user's specific post)
});

export const userInfoAtom = atom({
  key: "userInfo",
  default: {
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTVfMjA0%2FMDAxNjk0NzA0MjM4MjQz.vZdGvpZNSyvMUdwq5_lTBeiQDgn39YAuo-c3SiAFKPQg.18CqETOOi2-YGXFkv6vk_LQIJFY6Bdh85567yYQsiVkg.JPEG.hohoo2023%2FScreenshot_2023-09-15_at_00.10.11.JPG&type=sc960_832',
    email: "Circle@changwon.ac.kr",
    postCount: 3,
    followerCount: 56,
    followingCount: 52,
    name: "동그라미",
    description: "안녕하세요!",
  },
});
