import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/selectors';

export const Todos = () => {
  const [, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? []
  );

  const todos = useSelector(selectTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteToDo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const addTodo = newTodo => {
    const todo = {
      id: nanoid(),
      text: newTodo.search,
    };
    setTodos(prevState => [...prevState, todo]);
  };
  return (
    <div>
      <SearchForm addTodo={addTodo} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            {' '}
            <Todo
              text={todo.text}
              index={index + 1}
              handleDelete={handleDeleteToDo}
              id={todo.id}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
