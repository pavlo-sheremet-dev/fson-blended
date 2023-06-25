import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(8), ...newTodo }]);
  };
  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  return (
    <>
      <SearchForm onSubmit={addTodo} />
      <Grid>
        {todos.map((todo, idx) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              textTodo={todo.text}
              todoNumber={idx + 1}
              deleteTodo={deleteTodo}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
