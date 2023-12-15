import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native';
import moment from "moment";

const Wrapper = styled.View`
    display: flex;
    height: 70px;
    flex-direction: row;
    align-items: center;
    padding: 15px 0px;
    position: relative;
    gap: 10px;
    margin-top: 5px;
`
const Info = styled.View`
  margin-top: 2px;
  gap: 2px;
`
const Username = styled.Text`
    font-size: 16px;
    font-weight: 600;
`

const ProfileImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 40px;
  margin-left: 5px;
`

const Datetime = styled.Text`
  font-size: 14px;
  color: #8f8f8f;
`

type PostHeaderProps = {
    image: string;
    username: string,
    writedAt: number[]
}
export default function PostHeader({ image, username, writedAt }:PostHeaderProps) {
  const [formattedDate, setFormattedDate] = useState<any>()
  
  useEffect(() => {
    if(typeof writedAt == "undefined") return;
    setFormattedDate(moment({
      year: writedAt[0],
      month: writedAt[1] - 1,
      day: writedAt[2],
      hour: writedAt[3],
      minute: writedAt[4],
      second: writedAt[5]
    }))
  }, [writedAt])
  
  return (
    <Wrapper>
        <ProfileImage source={{ uri: image }} />
        <Info>
        <Username>{username}</Username>
        <Datetime>{formattedDate && formattedDate.startOf('second').fromNow()}</Datetime>
        </Info>
        
    </Wrapper>
  )
}
