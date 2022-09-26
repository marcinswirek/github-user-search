import React, {useState} from 'react'
import styled from 'styled-components'
import GlobalStyle from '../global/globalStyle'
import LogoSrc from '../assets/images/github-logo.png'
import SearchInput from './SearchInput'
import UsersList from './UsersList'


const Application = styled.div`
  text-align: center;
  font-family: Arnold;
`;

const HeaderImage = styled.img`
  margin: 0 auto;
`;

const FooterLink = styled.span`
  font-size: 8px;
`;

const App = () => {

  const [inputValue, setInputValue ] = useState('')
  const [users, setUsers] = useState([])

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const url = `https://api.github.com/search/users?q=${inputValue}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => setUsers(responseJson.items));
    
    setInputValue('')
  }

  return (
    <>
      <GlobalStyle/>
      <Application>
        <HeaderImage src={ LogoSrc }/>
        <SearchInput inputValue={inputValue} onSubmitHandler={onSubmitHandler} handleInputChange={handleInputChange}/>
        <UsersList users={users}/>
        <FooterLink>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is licensed by CC BY 3.0</FooterLink>
      </Application>
    </>
  )
}

export default App