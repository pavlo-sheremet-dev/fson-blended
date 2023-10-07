import { useEffect, useState } from 'react';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/todos.selectors';

const getTodos = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};
export function Todos() {
  const todos = useSelector(selectTodos);
  const [, setTodos] = useState(getTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = id => {
    setTodos(prevTodo =>
      prevTodo.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <SearchForm />
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
