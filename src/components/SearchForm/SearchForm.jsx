import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todosSlice';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSumbit = event => {
    event.preventDefault();
    const formData = {
      id: nanoid(8),
      text: search,
    };
    dispatch(addTodo(formData));
    // onSubmit(formData);
    setSearch('');
  };

  return (
    <SearchFormStyled onSubmit={handleSumbit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleChange}
        value={search}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
