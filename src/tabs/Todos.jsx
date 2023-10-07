import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/todos/todos.operations';
import { selectTodos } from 'redux/todos/todos.selectors';

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <SearchForm />
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
