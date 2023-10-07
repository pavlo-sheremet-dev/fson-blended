import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/todos.selectors';

export function Todos() {
  const todos = useSelector(selectTodos);

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
