import { useContext } from 'react';

import { Grid, GridItem, SearchForm, Todo } from 'components';

import { ArrayHandlerContext } from 'Providers/MobileMenuProvider';

export const Todos = () => {
  const { array: todos } = useContext(ArrayHandlerContext);

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
