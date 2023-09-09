import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export function SearchForm({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = ev => {
    setSearch(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit({ search });

    setSearch('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        value={search}
        onChange={handleChange}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
}
