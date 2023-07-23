import { useState } from 'react';
import { Grid, GridItem, SearchForm, EditForm, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selecSelectTodo, selectTodos } from 'redux/selectors';

export const Todos = () => {
  const [, setTodos] = useState([]);
  const todos = useSelector(selectTodos);
  const selectedTodo = useSelector(selecSelectTodo);
  const [, setSelectedTodo] = useState(null);

  const selectTodo = id => {
    const currentTodo = todos.find(todo => todo.id === id);
    setSelectedTodo(currentTodo);
  };

  const editTodos = editedTodo => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === editedTodo.id ? editedTodo : todo))
    );
    setSelectedTodo(null);
  };

  const closeForm = () => {
    setSelectedTodo(null);
  };

  return (
    <>
      {selectedTodo ? (
        <EditForm
          selectedTodo={selectedTodo}
          editTodos={editTodos}
          closeForm={closeForm}
        />
      ) : (
        <SearchForm />
      )}

      <Grid>
        {todos.map((todo, idx) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              textTodo={todo.text}
              todoNumber={idx + 1}
              selectTodo={selectTodo}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
