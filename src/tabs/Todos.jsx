import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = data => {
    const todo = {
      todoText: data.search,
      id: nanoid(),
    };

    setTodos(prevTodo => [...prevTodo, todo]);
  };

  return (
    <>
      <SearchForm onSubmit={addTodo} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo todo={todo} index={index + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
