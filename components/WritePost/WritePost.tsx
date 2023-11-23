import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as MediaLibrary from "expo-media-library";

const Wrapper = styled.View`
  display: flex;
  padding-top: 20px;
  height: 100%;
`;

const SelectedImage = styled.Image`
    
`

const RIText = styled.Text`
    
`

export default function WritePost() {
  const [photos, setPhotos] = useState([]);


  
  return <Wrapper>
    {/* <SelectedImage source={{ uri: photos[0].uri }}/> */}
    <RIText>최근 항목</RIText>
  </Wrapper>;
}
