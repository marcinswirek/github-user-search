import React from 'react'
import styled from 'styled-components'
import BackgroundSrc from '../assets/images/github.png'
import User from './User'

const List = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 20px;
  margin: auto;
  padding: 15px;
  background-image: url(${BackgroundSrc});
  background-repeat: none;
  background-size: contain;
  background-position: center;
  height: 100vh;
  width: 100%;
  `

const UsersList = (props) => {
  const {users} = props

  const ListItem = users.map(user => <User key={user.id} user={user} />)

  return (
    <List>
      { users &&
        ListItem
      }
    </List>
  )
}

export default UsersList