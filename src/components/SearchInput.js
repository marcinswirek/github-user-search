import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  text-align: center;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FormInput = styled.input`
	margin: 15px;
  height: 35px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 0 10px $black;
`;

const FormLabel = styled.label`
	font-size: 25px;
  font-weight: 900;
`;

const SearchInput = (props) => {

  const {handleInputChange, onSubmitHandler, inputValue} = props;

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormLabel>Search user by name</FormLabel>
      <FormInput
        type="text"
        onChange={e => handleInputChange(e)}
        value={inputValue}
      />
    </Form>
  )
}

export default SearchInput