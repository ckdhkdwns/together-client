import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100%;
  justify-content: space-between;
`;
const Main = styled.View`
  display: flex;
`;

const PrevButton = styled.TouchableOpacity`
  justify-content: center;
  padding-left: 8px;
  height: 50px;
`;
const ChosenImage = styled.Image``;

const ContentInput = styled.TextInput`
  padding: 26px;
  font-size: 16px;
  width: 100%;
`;

const UploadButton = styled.TouchableOpacity`
  background: #ff5858;
  justify-content: center;
  margin: 9px;
  align-items: center;
  height: 44px;
  border-radius: 50px;
`;

const WText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export default function WriteContent({ route }) {
  const [content, setContent] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const mainNavigation = useNavigation<StackNavigationProp<TabParamList>>();
  const startNavigation = useNavigation<StackNavigationProp<StartStackParamList>>();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handlePrevButton = () => {
    startNavigation.navigate("SelectPhoto");
  };
  const handleUpload = () => {
    try {
      // fetch
      mainNavigation.navigate("Home");
    } catch {}
  };
  return (
    <Wrapper>
      <Main>
        <PrevButton onPress={handlePrevButton}>
          <Feather name="chevron-left" size={35} color="#9f9f9f" />
        </PrevButton>
        <ChosenImage
          style={{ width: windowWidth, height: windowWidth }}
          source={{ uri: route.params.imageUri }}
        />
        <ContentInput
          multiline={true}
          numberOfLines={10}
          placeholder="문구를 작성하세요"
          value={content}
          onChange={onChangeContent}
        />
      </Main>

      <UploadButton onPress={handleUpload}>
        <WText>공유하기</WText>
      </UploadButton>
    </Wrapper>
  );
}
