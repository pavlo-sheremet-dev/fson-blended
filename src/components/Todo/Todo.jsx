import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useTodos } from 'hooks/useTodos';

export const Todo = ({ text, elIndex, id }) => {
  const { deleteTodo } = useTodos();

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{elIndex}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
