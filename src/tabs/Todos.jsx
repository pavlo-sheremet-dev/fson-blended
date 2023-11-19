import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const generateTodo = formData => {
    const todo = { id: nanoid(), ...formData };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  return (
    <>
      <SearchForm generageTodo={generateTodo} />
      <Grid>
        {todos.map(({ id, text }, index) => {
          return (
            <GridItem key={id}>
              <Todo text={text} elIndex={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
