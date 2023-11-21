import SettingHeader from 'components/PageHeader/Setting'
import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.SafeAreaView`
  background: #ffffff;
  height: 100%;
`

const LogoutButton = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  padding-left: 15px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
`
const LogoutText = styled.Text`
  font-size: 22px;
`

const Description = styled.View`
  height: 60px;
  justify-content: center;
  padding-left: 15px;
  border: 0px solid #f8f8f8;
  border-bottom-width: 2px;
  gap: 2px;
`

const Developed = styled.Text`
  font-size: 20px;
`
const Developers = styled.Text`
  font-size: 15px;
  color: #a0a0a0;
  
`

export default function Setting() {
  const handleLogout = () => {
    try{

    } catch {
      
    }
  }
  return (
    <Wrapper>
      <SettingHeader/>
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
