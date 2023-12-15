import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackNavigationState, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import SettingHeader from 'components/PageHeader/SettingHeader'
import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  background: #ffffff;
  height: 100%;
  padding-top: 3px;
`

const LogoutButton = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  padding-left: 20px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
`
const LogoutText = styled.Text`
  font-size: 21px;
`

const Description = styled.View`
  height: 80px;
  justify-content: center;
  padding-left: 20px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  gap: 8px;
`

const Developed = styled.Text`
  font-size: 21px;
`
const Developers = styled.Text`
  font-size: 15px;
  color: #a0a0a0;
  
`

export default function Setting() {
  const startStackNavigation = useNavigation<StackNavigationProp<StartStackParamList>>();
  const tabNavigation = useNavigation<StackNavigationProp<TabParamList>>();
  const homeStackNavigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const handleLogout = async () => {
    await AsyncStorage.clear();
    tabNavigation.navigate("Home");
    homeStackNavigation.navigate("Posts");
    startStackNavigation.replace("Login");

  }
  return (
    <Wrapper>
      <SettingHeader />
      <LogoutButton onPress={handleLogout}>
        <LogoutText>로그아웃</LogoutText>
      </LogoutButton>
      <Description>
        <Developed>제작자</Developed>
        <Developers>류가연, 전유진, 정예진, 차왕준, 이주원</Developers>
      </Description>
    </Wrapper>
    
  )
}
