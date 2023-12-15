import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Dimensions, Image } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Wrapper = styled.FlatList``;
const ImageButton = styled.TouchableOpacity``;

const ImageItem = ({ handleImageButton, item }) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ImageButton onPress={() => handleImageButton(item)} >
      <Image
        key={item.id}
        source={{ uri: item.imgUrl }}
        style={{ width: windowWidth / 3, height: windowWidth / 3 }}
      />
    </ImageButton>
  );
};

export default function PostImages({ postImageUrls }) {
  const [data, setData] = useState([...postImageUrls].reverse());
  const userStackNavigation = useNavigation<StackNavigationProp<UserStackParamList>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    setData([...postImageUrls].reverse());
  }, [isFocused]);

  const handleImageButton = (post) => {
    userStackNavigation.navigate('DetailPost', { post: post })
  }
  return (
    <Wrapper
      contentContainerStyle={{
        height: "100%",
      }}
      data={data}
      numColumns={3}
      renderItem={(i) => <ImageItem handleImageButton={handleImageButton} item={i.item} />}
    />
  );
}
