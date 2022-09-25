import React, {useState, SetState, useEffect} from 'react'
import styled from 'styled-components'
import GlobalFonts from '../fonts/fonts';
import LogoSrc from '../assets/images/github-logo.png';
import SearchInput from './SearchInput';

const Application = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arnold;
`;

const HeaderImage = styled.img`
  width: 300px;
  height: 130px;
  margin-bottom: 20px;
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

  console.log(users)

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
      <GlobalFonts/>
      <Application>
        <HeaderImage src={ LogoSrc }/>
        <SearchInput inputValue={inputValue} onSubmitHandler={onSubmitHandler} handleInputChange={handleInputChange}/>
        <FooterLink>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is licensed by CC BY 3.0</FooterLink>
      </Application>
    </>
  )
}

export default App