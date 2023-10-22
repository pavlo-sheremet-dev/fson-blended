import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todos/slice';

export const Todo = ({ text, index, id }) => {
  const dispatch = useDispatch()

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
