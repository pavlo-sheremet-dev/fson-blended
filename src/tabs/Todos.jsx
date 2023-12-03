import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, onDeleteTodo } from 'redux/store';

export const Todos = () => {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const generateTodo = formData => {
    dispatch(addTodo({ id: nanoid(), ...formData }));
  };

  const deleteTodo = todoId => {
    dispatch(onDeleteTodo(todoId));
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
