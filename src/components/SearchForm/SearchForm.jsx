import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { useArrayHandler } from 'Providers/MobileMenuProvider';

export const SearchForm = () => {
  const [search, setSearch] = useState('');

  const { addItem } = useArrayHandler();

  const onChange = event => {
    setSearch(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    addItem({ text: search });
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
