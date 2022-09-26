import React from 'react'
import styled from 'styled-components'

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.6);
  box-shadow: 0 0 15px black;
`;

const UserAvatar = styled.img`
  margin: 5px auto;
  border-radius: 50%;
  max-width: 100px;
`;

const UserLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 900;
`

const User = (props) => {
  const {user} = props
  return (
    <UserBox>
      <UserAvatar src={user.avatar_url} alt="" className="userAvatar" />
      <UserLink href={user.html_url} className="userLink">{user.login}</UserLink>
    </UserBox>
  )
}

export default User