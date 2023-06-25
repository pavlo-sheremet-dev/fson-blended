import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(8), ...newTodo }]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

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
        <SearchForm onSubmit={addTodo} />
      )}

      <Grid>
        {todos.map((todo, idx) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              textTodo={todo.text}
              todoNumber={idx + 1}
              deleteTodo={deleteTodo}
              selectTodo={selectTodo}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
