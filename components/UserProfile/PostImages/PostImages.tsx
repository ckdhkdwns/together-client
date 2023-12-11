import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Dimensions, Image } from "react-native";

const Wrapper = styled.FlatList`
`;


const ImageItem = ({ item }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Image
      key={item.id}
      source={{ uri: item.imgUrl }}
      style={{ width: windowWidth / 3, height: windowWidth / 3}}
    />
  );
};

export default function PostImages({ postImageUrls }) {
  return (
    <Wrapper
    contentContainerStyle={{
      height: "100%"
    }}
      data={postImageUrls}
      numColumns={3}
      renderItem={(i) => <ImageItem item={i.item} />}
    />
  );
}
