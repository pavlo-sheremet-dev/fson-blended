import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ generageTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const todoObject = {
      text: e.target.search.value,
    };
    generageTodo(todoObject);
    e.target.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
