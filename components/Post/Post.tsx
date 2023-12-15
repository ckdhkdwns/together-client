import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import PostHeader from "./Header";
import Toggles from "./Toggles/Toggles";
import Footer from "./Footer";
import { View, Image, TextInput } from "react-native";
import { Dimensions } from "react-native";
import PostComment from "./Comment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "atoms";
import { AntDesign } from "@expo/vector-icons";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #ffffff;
  width: 90%;
  border: 0px solid #efefef;
  border-bottom-width: 1px;
`;

const Sqaure = styled.View``;
const Divider = styled.Text`
  /* border: 0px solid #efefef;
  border-top-width: 1px; */
  font-size: 30px;
  margin: -30px auto 0px;
  letter-spacing: 3.5px;
  font-weight: 600;
  padding-left: 10px;
  color: #afafaf;
`;
const Content = styled.Text`
  font-size: 16px;
  padding: 10px 10px 5px;
  font-weight: 500;
`;
const Comments = styled.FlatList`
  margin: 0 10px;
`;

const CommentsToggleButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CTText = styled.Text`
  color: #7f7f7f;
`;

const ReplyModal = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background: #f3f3f3;
  height: 40px;
  margin-top: 10px;
  border-radius: 20px;
  align-items: center;
  padding: 0 15px;
`;
const ReplyTarget = styled.Text`
  color: #7f7f7f;
`;

const NoneText = styled.Text`
  font-size: 16px;
  padding-left: 10px;
  margin: 5px 0;
  color: #7f7f7f;
`

type Comment = {
  commentId: number;
  content: string;
  nickname: string;
  subComments: string[];
  userId: number;
};

export default function Post({ post }) {
  if(!post) return;
  const [isLiked, setIsLiked] = useState(post.isLike);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [isMarked, setIsMarked] = useState(post.isFavorite);
  const [comments, setComments] = useState<any[]>(post.comments);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [isCommentsFoled, setIsCommentsFolded] = useState(
    comments?.length && comments.length > 2 ? true : false
  );

  const inputCommentRef = useRef<TextInput>();

  const [isReplying, setIsReplying] = useState(false);
  const [replyTarget, setReplyTarget] = useState<Comment>();
  
  const [rootComments, setRootComments] = useState([]);
  const handleLike = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/posts/${post.postId}/like`,
        {
          isLike: !isLiked,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (isLiked) setLikeCount(likeCount - 1);
      else setLikeCount(likeCount + 1);

      setIsLiked(!isLiked);
    } catch (error) {
      console.error(error);
    }
  };
  const handleMark = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/posts/${post.postId}/favorite`,
        {
          isFavorite: !isMarked,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsMarked(!isMarked);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async (content: string, handleText) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const data = isReplying
        ? { content: content, parentId: replyTarget.commentId }
        : { content: content };
      const res = await axios.post(
        `${process.env.SERVER_IP}/api/posts/${post.postId}/comment`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(isReplying) {
        setComments(comments.map(c => {

          if(c.commentId == replyTarget.commentId) {
            c.subComments.push({
              commentId: res.data.result,
              content: content,
              nickname: userInfo.nickname
            })
          }
          return c
        }))
      } else {
        setComments([
          ...comments,
          {
            commentId: res.data.result,
            content: content,
            nickname: userInfo.nickname,
          },
        ]);
      }
      
      console.log("댓글 작성 완료");
      handleText("");
      setIsReplying(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

  }, [comments])

  const handleFoldComments = () => {
    setIsCommentsFolded(!isCommentsFoled);
  };

  const handleReplyButton = (comment) => {
    setIsReplying(true);
    setReplyTarget(comment);
    inputCommentRef.current.focus();
  };

  const handleCancelReply = () => {
    setIsReplying(false);
    setReplyTarget(null);
  };

  const squareSize = (Dimensions.get("window").width * 90) / 100;

  useEffect(() => {
    setIsLiked(post.isLike);
    setIsMarked(post.isFavorite);
    setLikeCount(post.likeCount);
    setComments(post.comments);
  }, [post]);

  return (
    <Wrapper>
      <PostHeader
        image={post.authorProfileImgUrl}
        username={post.authorNickname}
        writedAt={post.createdAt}
      />

      <Image
        style={{
          width: squareSize,
          height: squareSize,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        source={{ uri: post.imgUrl }}
      />

      <Toggles
        likeCount={likeCount}
        isLiked={isLiked}
        isMarked={isMarked}
        handleLike={handleLike}
        handleMark={handleMark}
      />

      <Content>{post.content}</Content>
      {typeof comments != "undefined" && comments.length == 0 && (
        <NoneText>아직 댓글이 없습니다.</NoneText>
      )}
      {typeof comments != "undefined" && comments.length > 2 && (
        <CommentsToggleButton onPress={handleFoldComments}>
          <CTText>{isCommentsFoled ? "댓글 더보기..." : "댓글 접기"}</CTText>
        </CommentsToggleButton>
      )}
      {/* <Divider style={{width: squareSize}}>.....</Divider> */}
      {typeof comments != "undefined" && comments.length > 0 && (
        <Comments
          data={isCommentsFoled ? comments.slice(0, 2) : comments}
          renderItem={(item) => {
            
              return <PostComment data={item.item} handleReplyButton={handleReplyButton} />
          }}
        />
      )}
      {isReplying && (
        <ReplyModal onPress={handleCancelReply}>
          <ReplyTarget>
            {replyTarget.nickname}님에게 답글 남기는 중...
          </ReplyTarget>
          <AntDesign name="close" size={16} color="#7f7f7f" />
        </ReplyModal>
      )}
      <Footer ref={inputCommentRef} handleComment={handleComment} />
    </Wrapper>
  );
}
