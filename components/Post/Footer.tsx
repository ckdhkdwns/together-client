import React, { ForwardedRef, Ref, RefObject, forwardRef, useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  align-items: center;
  position: relative;
  width: 100%;
  margin: auto;
  padding-bottom: 18px;
  padding: 10px 0;

`;
const CommentInput = styled.TextInput`
  height: 40px;
  background: #f3f3f3;
  font-size: 16px;
  padding-left: 15px;
  width: 100%;
  border-radius: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  width: 52px;
  height: 30px;
  border-radius: 18px;
  background: #ff5858;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 15px;
`;


type FooterProps = {
  handleComment : Function;
}

const Footer = React.forwardRef(({ handleComment }: FooterProps, ref:ForwardedRef<TextInput>) => {
  const [content, setContent] = useState("");

  const handleText = (text) => {
    setContent(text);
  };
  return (
    <Wrapper>
      {/* styld-components에서 ref가 안되는 이슈...  */}
      <TextInput style={{
        height: 40,
        backgroundColor: '#f3f3f3',
        fontSize: 16,
        paddingLeft: 15,
        width: "100%",
        borderRadius: 20
      }}ref={ref} placeholder="댓글을 입력하세요" value={content} onChangeText={handleText} />
      <ConfirmButton onPress={() => handleComment(content, handleText)}>
      <AntDesign name="arrowup" size={24} color="#ffffff" />
      </ConfirmButton>
    </Wrapper>
  )
})


export default Footer;
