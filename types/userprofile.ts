type UserProfile = {
    postCount: number;
    articles: {
      id: number,
      image: string
    },
    email: string
    followerCount: number
    followingCount: number
    introduce: string
    nickname: string
    profileImgUrl: string
    posts: [{
      id: number;
      imgUrl: string;
    }],
    isFollowing ?: boolean;
    userId ?: number;
  } 