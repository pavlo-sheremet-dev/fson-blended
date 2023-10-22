import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/selectors';

export const Todos = () => {
  
  const todos = useSelector(selectTodos);

  return (
    <div>
      <SearchForm/>
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            {' '}
            <Todo
              text={todo.text}
              index={index + 1}
              id={todo.id}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
