import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todos/todos.operations';

export function SearchForm() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleChange = ev => {
    setSearch(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    const todo = {
      todoText: search,
    };
    const action = addTodo(todo);

    dispatch(action);

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
