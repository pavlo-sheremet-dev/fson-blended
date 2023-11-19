import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useState, useEffect } from 'react';
const storageKey = 'todos';
const savedTodos = window.localStorage.getItem(storageKey);
export const Todos = () => {
  const [todos, setTodos] = useState(() => JSON.parse(savedTodos) ?? []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos]);

  const generateTodo = formData => {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), ...formData }]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <>
      <SearchForm generageTodo={generateTodo} />
      <Grid>
        {todos.map(({ id, text }, index) => {
          return (
            <GridItem key={id}>
              <Todo
                id={id}
                text={text}
                elIndex={index + 1}
                onDelete={deleteTodo}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
