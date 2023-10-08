import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ addTodo }) => {
  const [search, setSearch] = useState('');

  const onChange = event => {
    setSearch(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    addTodo({ search });
    setSearch('');
  };
  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={search}
        onChange={onChange}
      />
    </SearchFormStyled>
  );
};
