import { Grid, GridItem, SearchForm, EditForm, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selecSelectTodo, selectTodos } from 'redux/selectors';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const selectedTodo = useSelector(selecSelectTodo);

  return (
    <>
      {selectedTodo ? <EditForm /> : <SearchForm />}

      <Grid>
        {todos.map((todo, idx) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} textTodo={todo.text} todoNumber={idx + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
