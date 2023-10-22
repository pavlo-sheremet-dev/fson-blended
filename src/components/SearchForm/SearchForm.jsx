import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useTodos } from 'redux/todos/useTodos';

export const SearchForm = () => {
  const [search, setSearch] = useState('');
  const { addTodo } = useTodos();

  const onChange = event => {
    setSearch(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const todo = {
      id: nanoid(),
      text: search,
    };
    addTodo(todo);
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
