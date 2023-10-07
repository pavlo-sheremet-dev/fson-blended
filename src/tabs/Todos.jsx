import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';

const getTodos = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};
export function Todos() {
  const [todos, setTodos] = useState(getTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = data => {
    const todo = {
      todoText: data.search,
      id: nanoid(),
    };

    setTodos(prevTodo => [...prevTodo, todo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodo =>
      prevTodo.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <SearchForm onSubmit={addTodo} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo todo={todo} index={index + 1} onDeleteTodo={deleteTodo} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
