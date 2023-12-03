import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from 'redux/toodsSlice/selectors';
import * as actions from 'redux/toodsSlice/todosSlice';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const fetchContacts = useCallback(() => {
    dispatch(actions.addTodo({ text: 'todo', id: '1dwc' }));
  }, [dispatch]);

  const addTodo = todo => {
    const id = nanoid();
    dispatch(actions.addTodo({ ...todo, id }));
  };

  const deleteTodo = id => {
    dispatch(actions.onDeleteTodo(id));
  };

  return { todos, addTodo, deleteTodo, fetchContacts };
};
