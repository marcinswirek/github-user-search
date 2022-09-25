import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const SearchInput = (props) => {

  const {handleInputChange, onSubmitHandler, inputValue} = props;

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>Search user by name</label>
      <input
        type="text"
        onChange={e => handleInputChange(e)}
        value={inputValue}
      />
    </Form>
  )
}

export default SearchInput