import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { addTodo } from 'redux/todos/slice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    setSearch(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    const todo = {
      id: nanoid(),
      text: search,
    };
    dispatch(addTodo(todo));
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
