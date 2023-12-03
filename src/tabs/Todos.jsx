import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useTodos } from 'hooks/useTodos';
import { useEffect } from 'react';

export const Todos = () => {
  const { todos, fetchContacts } = useTodos();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <SearchForm />
      <Grid>
        {todos.map(({ id, text }, index) => {
          return (
            <GridItem key={id}>
              <Todo id={id} text={text} elIndex={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
