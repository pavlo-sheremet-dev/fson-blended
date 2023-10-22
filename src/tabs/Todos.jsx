import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useTodos } from 'redux/todos/useTodos';

export const Todos = () => {
  const { todos } = useTodos();

  return (
    <div>
      <SearchForm />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            {' '}
            <Todo text={todo.text} index={index + 1} id={todo.id} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
