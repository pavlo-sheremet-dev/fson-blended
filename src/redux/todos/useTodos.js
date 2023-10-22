import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/selectors';
import * as actions from 'redux/todos/slice';

export const useTodos = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const addTodo = newTodo => {
    dispatch(actions.addTodo(newTodo));
  };

  const deleteTodo = id => dispatch(actions.deleteTodo(id));

  return { todos, addTodo, deleteTodo };
};
