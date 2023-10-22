import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/selectors';
import { addTodo, deleteTodo } from 'redux/todos/slice';

export const Todos = () => {
  const [, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? []
  );

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteToDo = id => {
    dispatch(deleteTodo(id));
    // setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const addTodo2 = newTodo => {
    const todo = {
      id: nanoid(),
      text: newTodo.search,
    };
    dispatch(addTodo(todo));
    // setTodos(prevState => [...prevState, todo]);
  };
  return (
    <div>
      <SearchForm addTodo={addTodo2} />
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
