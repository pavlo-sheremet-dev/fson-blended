import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { deleteTodo, findTodo } from 'redux/todosSlice';
import { useDispatch } from 'react-redux';

export const Todo = ({ textTodo, todoNumber, id }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{todoNumber}
      </Text>
      <Text>{textTodo}</Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton onClick={() => dispatch(findTodo(id))}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};
